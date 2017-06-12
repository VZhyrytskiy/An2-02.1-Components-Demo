import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './host.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HostComponent],
  exports: [HostComponent]
})
export class HostModule { }
