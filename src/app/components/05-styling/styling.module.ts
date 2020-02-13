import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ExternalStyleComponent,
  InlineStyleComponent,
  NoEncapsulationComponent,
  ShadowDomEncapsulationComponent
} from '.';

const components = [InlineStyleComponent,
  ExternalStyleComponent,
  NoEncapsulationComponent,
  ShadowDomEncapsulationComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [...components]
})
export class StylingModule {}
