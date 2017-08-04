import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, 
         MdCardModule, MdToolbarModule, 
         MdIconModule, MdTooltipModule } from '@angular/material';

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
    MdToolbarModule,
    MdIconModule,
    MdTooltipModule,
  	MdCheckboxModule
  ],
  declarations: []
})
export class MaterialModule { }
