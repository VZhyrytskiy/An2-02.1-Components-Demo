import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './host.component';
import { HostDirective } from './host.directive';

const compDirs = [HostComponent, HostDirective];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...compDirs],
  exports: [...compDirs]
})
export class HostModule { }
