import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TooltipContentComponent,
  TooltipComponent,
  TooltipDirective,
  TooltipsContainerComponent,
  TooltipContainerDirective } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipContentComponent,
    TooltipComponent,
    TooltipDirective,
    TooltipsContainerComponent,
    TooltipContainerDirective
  ],
  exports: [
    TooltipsContainerComponent
  ],
  entryComponents: [
    TooltipContentComponent,
    TooltipComponent
  ]
})
export class TooltipsModule { }
