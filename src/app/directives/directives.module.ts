import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIfDirective, CustomForDirective, CarouselDirective } from './structural-directives';

const dirs = [CustomIfDirective, CustomForDirective, CarouselDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...dirs],
  exports: [...dirs]
})
export class DirectivesModule { }
