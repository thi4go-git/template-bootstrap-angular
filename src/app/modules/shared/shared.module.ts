import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

//Esse módulo contém os imports necessários para os demais módulos.

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule
  ], exports: [
    CommonModule,
    MatIconModule
  ], providers: [
  ]
})
export class SharedModule { }
