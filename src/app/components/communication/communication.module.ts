import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiblingContainerComponent, Sibling1Component, Sibling2Component, CommunicatorService } from './sibling-communication';
import { ClickStopComponent, ClickStopDirective } from './output/';
import { TaskListComponent, TaskFormComponent, TaskComponent, TasksService } from './parent-child-communication';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Sibling1Component,
    Sibling2Component,
    SiblingContainerComponent,
    ClickStopDirective,
    ClickStopComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskComponent
  ],
  providers: [
    CommunicatorService,
    TasksService
  ],
  exports: [
    SiblingContainerComponent,
    ClickStopComponent,
    TaskListComponent,
    TaskFormComponent
  ]
})
export class CommunicationModule { }
