import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TaskListComponent, TaskFormComponent,
  TaskComponent, TasksService, ParentChildCommunicationComponent
} from './01-parent-child-communication';
import { ClickStopComponent, ClickStopDirective } from './02-output-event-directive/';
import { ParentComponent, ChildComponent } from './03-viewchild-viewchildren';
import { SiblingContainerComponent, Sibling1Component, Sibling2Component, CommunicatorService } from './04-sibling-communication';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    Sibling1Component,
    Sibling2Component,
    SiblingContainerComponent,
    ClickStopDirective,
    ClickStopComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskComponent,
    ParentComponent,
    ParentChildCommunicationComponent,
    ChildComponent
  ],
  providers: [
    CommunicatorService,
    TasksService
  ],
  exports: [
    SiblingContainerComponent,
    ClickStopComponent,
    ParentChildCommunicationComponent,
    ParentComponent
  ]
})
export class CommunicationModule { }
