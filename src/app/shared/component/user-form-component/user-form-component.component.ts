import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country, User } from '../../model/user.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-user-form-component',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.scss'],
})
export class UserFormComponentComponent implements OnInit {

  @Input() user: User | null = null;
  @Input() isEdit: boolean = false;
  @Output() ngSubmitForm = new EventEmitter<User>();

  userForm!: FormGroup;
  countries: Country[] = [];

  customAlertOptions = {
    header: 'Países',
    subHeader: 'Selecciona tu país de residencia',
    translucent: true
  };

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      country: [null, Validators.required],
    });

    if (this.isEdit && this.user) {
      this.userForm.patchValue(this.user);
      this.userForm.get('password')?.clearValidators();
      this.userForm.get('password')?.updateValueAndValidity();
    }

    this.countryService.getCountries().subscribe({
      next: (data) => (this.countries = data),
      error: (err) => console.error('Error loading countries:', err)
    });
  }

  public compareCountries = (c1: Country, c2: Country): boolean => {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.ngSubmitForm.emit(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
