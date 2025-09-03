import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Country } from '../../model/user.interface';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss'],
  standalone : false
})
export class SelectComponentComponent {
  @Input() label!: string;
  @Input() options: Country[] = [];
  @Input() control!: AbstractControl | null;
  @Input() compareWith: (o1: any, o2: any) => boolean = (o1, o2) => o1 === o2;

  get formControl(): FormControl {
    return this.control as FormControl;
  }
}

