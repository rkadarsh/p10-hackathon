import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule, MdCheckboxModule, 
         MdCardModule, MdToolbarModule, 
         MdIconModule, MdTooltipModule,
         MdSelectModule,
         MdInputModule } from '@angular/material';




@NgModule({
  imports: [
  	MdButtonModule,
  	MdCheckboxModule,
    MdCardModule,
    MdSelectModule,
    CommonModule,
    MdToolbarModule,
    MdIconModule
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
    MdIconModule
  ],
  declarations: []
})
export class MaterialModule { }
