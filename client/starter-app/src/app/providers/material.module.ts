import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule, MdCheckboxModule, 
         MdCardModule, MdToolbarModule, 
         MdIconModule, MdTooltipModule,
         MdInputModule } from '@angular/material';




@NgModule({
  imports: [
  	MdButtonModule,
  	MdCheckboxModule,
    MdCardModule,
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
    MdInputModule,
  	MdCheckboxModule,
    MdIconModule

  ],
  declarations: []
})
export class MaterialModule { }
