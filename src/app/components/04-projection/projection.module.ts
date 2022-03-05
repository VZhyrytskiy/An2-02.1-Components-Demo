import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent, Panel1Component, Panel2Component } from './components';

const comp = [MessageComponent, Panel1Component, Panel2Component];

@NgModule({
  imports: [CommonModule],
  declarations: [...comp],
  exports: [...comp]
})
export class ProjectionModule {}
