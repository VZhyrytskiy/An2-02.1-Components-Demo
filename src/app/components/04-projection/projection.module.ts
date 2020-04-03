import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import { Panel1Component } from './panel1/panel1.component';
import { Panel2Component } from './panel2/panel2.component';

const comp = [MessageComponent, Panel1Component, Panel2Component];

@NgModule({
  imports: [CommonModule],
  declarations: [...comp],
  exports: [...comp]
})
export class ProjectionModule {}
