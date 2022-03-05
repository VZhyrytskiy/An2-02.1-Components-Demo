import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostComponent, HostDirective } from './host';
import { UnderlineComponent, Underline1Directive, Underline2Directive } from './underline';
import { OnlyNumberComponent, OnlyNumberDirective } from './only-number';

const compDirs = [HostComponent, HostDirective, UnderlineComponent, Underline1Directive, Underline2Directive, OnlyNumberComponent, OnlyNumberDirective];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...compDirs],
  exports: [...compDirs]
})
export class HostModule { }
