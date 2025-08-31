import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, SelectControlValueAccessor } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectComponentComponent } from './component/select-component/select-component.component';


const MODULO = [CommonModule ,  FormsModule, IonicModule];
// const COMPONENTS  = [Headers , SelectComponentComponent];


@NgModule({
  declarations: [ ],
  imports: [...MODULO],
  exports : [...MODULO  ]
})
export class SharedModule { }
