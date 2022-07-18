import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ExternalStyleComponent,
  InlineStyleComponent,
  NoEncapsulationComponent,
  ShadowDomEncapsulationComponent,
  HostSelectorComponent,
  HostContextSelectorComponent
} from '.';

const components = [
  InlineStyleComponent,
  ExternalStyleComponent,
  NoEncapsulationComponent,
  ShadowDomEncapsulationComponent,
  HostSelectorComponent,
  HostContextSelectorComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: [...components, HostSelectorComponent, HostContextSelectorComponent],
  exports: [...components]
})
export class StylingModule {}
