import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgComponent } from './svg.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SvgComponent],
  exports: [SvgComponent]
})
export class SvgModule {}
