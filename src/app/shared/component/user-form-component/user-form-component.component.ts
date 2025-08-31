import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-component',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.scss'],
  standalone : false
})
export class UserFormComponentComponent implements OnInit {

   @Output() ngSubmitForm = new EventEmitter<any>();

  registerForm!: FormGroup;

  countries = [
    { id: 'CO', value: '🇨🇴 Colombia' },
    { id: 'MX', value: '🇲🇽 México' },
    { id: 'AR', value: '🇦🇷 Argentina' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.ngSubmitForm.emit(this.registerForm.value);
    }
  }
}
