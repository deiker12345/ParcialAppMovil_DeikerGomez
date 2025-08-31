import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss'],
  standalone : false
})
export class SelectComponentComponent {

   @Input() label!: string;
   @Input() options: { id: string, value: string }[] = [];
   @Input() control!: FormControl;
}
