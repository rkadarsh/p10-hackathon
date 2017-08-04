import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
  	MdButtonModule,
  	MdCheckboxModule,
    MdCardModule,
    CommonModule
  ],
  exports: [
  	MdButtonModule,
    MdCardModule,
  	MdCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
