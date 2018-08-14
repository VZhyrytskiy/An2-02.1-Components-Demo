import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ExternalStyleComponent,
  InlineStyleComponent,
  NativeEncapsulationComponent,
  NoEncapsulationComponent,
  ShadowDomEncapsulationComponent
} from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ],
  exports: [
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ]
})
export class StylingModule {}
