import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message';
import { Panel1Component } from './panel1/panel1.component';
import { Panel2Component } from './panel2/panel2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent,
    Panel1Component,
    Panel2Component
  ],
  exports: [
    MessageComponent,
    Panel1Component,
    Panel2Component
  ]
})
export class ProjectionModule { }
