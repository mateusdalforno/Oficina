import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesAddEditPageRoutingModule } from './clientes-add-edit-routing.module';

import { ClientesAddEditPage } from './clientes-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesAddEditPageRoutingModule
  ],
  declarations: [ClientesAddEditPage]
})
export class ClientesAddEditPageModule {}
