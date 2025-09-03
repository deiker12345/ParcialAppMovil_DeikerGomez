import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
  standalone : false
})
export class InputComponentComponent  {

  @Input() label!: string;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() control!: AbstractControl | null;

  get formControl(): FormControl {
    return this.control as FormControl;
  }
}
