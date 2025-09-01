import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SelectComponentComponent } from './component/select-component/select-component.component';
import { InputComponentComponent } from './component/input-component/input-component.component';
import { UserFormComponentComponent } from './component/user-form-component/user-form-component.component';
import { LinkComponentComponent } from './component/link-component/link-component.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CardComponent } from './component/card/card.component';
import { ModalComponent } from './component/modal/modal.component';
import { HeaderComponent } from './component/header/header.component';
import { ProfileComponent } from './component/profile/profile.component';


const MODULES = [CommonModule, FormsModule, IonicModule , ReactiveFormsModule];
const COMPONENTS = [
  SelectComponentComponent,
  InputComponentComponent,
  UserFormComponentComponent,
  LinkComponentComponent,
  SidebarComponent,
  CardComponent,
  ModalComponent,
  HeaderComponent,
  ProfileComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule {}
