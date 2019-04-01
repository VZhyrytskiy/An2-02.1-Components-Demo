import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TaskListComponent,
  TaskFormComponent,
  TaskComponent,
  TasksService,
  ParentChildCommunicationComponent
} from './01-parent-child-communication';
import {
  ClickStopComponent,
  ClickStopDirective
} from './02-output-event-directive';
import { ParentComponent, ChildComponent } from './03-viewchild-viewchildren';
import {
  SiblingContainerComponent,
  Sibling1Component,
  Sibling2Component,
  CommunicatorService
} from './04-sibling-communication';
import {
  SiblingContainer2Component,
  Sibling3Component,
  Sibling4Component
} from './05-service-communication';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    Sibling1Component,
    Sibling2Component,
    Sibling3Component,
    Sibling4Component,
    SiblingContainerComponent,
    SiblingContainer2Component,
    ClickStopDirective,
    ClickStopComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskComponent,
    ParentComponent,
    ParentChildCommunicationComponent,
    ChildComponent
  ],
  providers: [CommunicatorService, TasksService],
  exports: [
    SiblingContainerComponent,
    SiblingContainer2Component,
    ClickStopComponent,
    ParentChildCommunicationComponent,
    ParentComponent
  ]
})
export class CommunicationModule {}
