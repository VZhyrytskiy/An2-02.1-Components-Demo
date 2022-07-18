import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIfDirective, CustomForDirective, CarouselDirective } from './structural-directives';
import { HostDirective, Underline1Directive, HostComponent, UnderlineComponent, OnlyNumberComponent, Underline2Directive, OnlyNumberDirective } from './attribute-directives/host-binding-host-listener';

const dirs = [CustomIfDirective, HostDirective, CustomForDirective, Underline1Directive, Underline2Directive, OnlyNumberDirective, CarouselDirective];
const comps = [HostComponent, UnderlineComponent, OnlyNumberComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...comps, ...dirs],
  exports: [...comps, ...dirs]
})
export class DirectivesModule { }
