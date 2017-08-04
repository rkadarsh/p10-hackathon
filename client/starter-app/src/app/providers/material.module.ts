import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdSelectModule } from '@angular/material';

@NgModule({
  imports: [
  	MdButtonModule,
  	MdCheckboxModule,
    MdCardModule,
    MdSelectModule,
    CommonModule
  ],
  exports: [
  	MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
