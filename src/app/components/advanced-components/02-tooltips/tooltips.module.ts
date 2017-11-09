import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TooltipContentComponent,
  TooltipComponent,
  TooltipDirective,
  TooltipsDemoComponent } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipContentComponent,
    TooltipComponent,
    TooltipDirective,
    TooltipsDemoComponent
  ],
  exports: [
    TooltipsDemoComponent
  ],
  entryComponents: [
    TooltipContentComponent,
    TooltipComponent
  ]
})
export class TooltipsModule { }
