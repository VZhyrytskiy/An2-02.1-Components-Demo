import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ExternalStyleComponent,
  InlineStyleComponent,
  NativeEncapsulationComponent,
  NoEncapsulationComponent
} from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent
  ],
  exports: [
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent
  ]
})
export class StylingModule {}
