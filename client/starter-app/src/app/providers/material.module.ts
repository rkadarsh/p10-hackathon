import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule, MdCheckboxModule, 
         MdCardModule, MdToolbarModule, 
         MdIconModule, MdTooltipModule,
         MdInputModule,MdSelectModule } from '@angular/material';





@NgModule({
  imports: [
  	MdButtonModule,
  	MdCheckboxModule,
    MdCardModule,
    MdSelectModule,
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule
  ],
  exports: [
  	MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdTooltipModule,
    MdCheckboxModule,
    MdSelectModule,
    MdInputModule,
  	MdCheckboxModule,
    MdIconModule,
    MdSelectModule


  ],
  declarations: []
})
export class MaterialModule { }
