import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ChangeDetectionContainerComponent,
  DefaultComponent,
  OnPushComponent
} from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ChangeDetectionContainerComponent,
    DefaultComponent,
    OnPushComponent
  ],
  exports: [
    ChangeDetectionContainerComponent
  ]
})
export class ChangeDetectionModule { }
