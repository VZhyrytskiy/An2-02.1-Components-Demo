import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SplitterDirective, SplitterComponent } from '.';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SplitterDirective,
    SplitterComponent
  ],
  exports: [
    SplitterComponent
  ]
})
export class CustomInputModule { }
