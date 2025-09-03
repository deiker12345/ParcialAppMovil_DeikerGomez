import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InputComponentComponent } from './component/input-component/input-component.component';
import { UserFormComponentComponent } from './component/user-form-component/user-form-component.component';
import { LinkComponentComponent } from './component/link-component/link-component.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CardComponent } from './component/card/card.component';
import { ModalComponent } from './component/modal/modal.component';
import { HeaderComponent } from './component/header/header.component';
import { PrincipalNewsComponentComponent } from './component/principal-news-component/principal-news-component.component';
import { SelectComponentComponent } from './component/select-component/select-component.component';




const MODULES = [CommonModule, FormsModule, IonicModule , ReactiveFormsModule];
const COMPONENTS = [
  InputComponentComponent,
  LinkComponentComponent,
  SidebarComponent,
  CardComponent,
  ModalComponent,
  HeaderComponent,
  PrincipalNewsComponentComponent,
  SelectComponentComponent,
  UserFormComponentComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES,...COMPONENTS]
})
export class SharedModule {}
