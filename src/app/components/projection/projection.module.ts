import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message';
import { PanelComponent } from './panel';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent,
    PanelComponent
  ],
  exports: [
    MessageComponent,
    PanelComponent
  ]
})
export class ProjectionModule { }
