import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SelectComponentComponent } from './component/select-component/select-component.component';
import { InputComponentComponent } from './component/input-component/input-component.component';
import { UserFormComponentComponent } from './component/user-form-component/user-form-component.component';
import { LinkComponentComponent } from './component/link-component/link-component.component';

const MODULES = [CommonModule, FormsModule, IonicModule , ReactiveFormsModule];
const COMPONENTS = [
  SelectComponentComponent,
  InputComponentComponent,
  UserFormComponentComponent,
  LinkComponentComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule {}
