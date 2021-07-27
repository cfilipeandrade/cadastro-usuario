import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    AppMaterialModule
  ]
})
export class UserModule { }
