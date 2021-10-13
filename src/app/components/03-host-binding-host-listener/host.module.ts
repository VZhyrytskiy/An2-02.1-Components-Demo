import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostComponent } from './host/host.component';
import { HostDirective } from './host/host.directive';
import { UnderllineComponent } from './underline/underline.component';
import { Underline1Directive } from './underline/underline-1.directive';
import { Underline2Directive } from './underline/underline-2.directive';

const compDirs = [HostComponent, HostDirective, UnderllineComponent, Underline1Directive, Underline2Directive];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...compDirs],
  exports: [...compDirs]
})
export class HostModule { }
