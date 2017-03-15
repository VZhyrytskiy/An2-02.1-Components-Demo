import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SiblingContainerComponent,
  Sibling1Component,
  Sibling2Component,
  CommunicatorService
} from './sibling-communication';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Sibling1Component,
    Sibling2Component,
    SiblingContainerComponent
  ],
  providers: [CommunicatorService],
  exports: [SiblingContainerComponent]
})
export class CommunicationModule { }
