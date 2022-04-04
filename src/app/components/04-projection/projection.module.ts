import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent, Panel1Component, Panel2Component, Panel3Component, CardComponent } from './components';

const comp = [
  MessageComponent,
  Panel1Component,
  Panel2Component,
  Panel3Component,
  CardComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: [...comp, CardComponent],
  exports: [...comp]
})
export class ProjectionModule {}
