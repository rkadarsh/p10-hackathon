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
    MdInputModule,
  	MdCheckboxModule,
    MdIconModule,
    MdSelectModule

  ],
  declarations: []
})
export class MaterialModule { }
