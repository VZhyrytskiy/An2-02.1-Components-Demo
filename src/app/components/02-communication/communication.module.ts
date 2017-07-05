import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent, TaskFormComponent, TaskComponent, TasksService } from './01-parent-child-communication';
import { ClickStopComponent, ClickStopDirective } from './02-output-event-directive/';
import { ParentComponent, ChildComponent } from './03-viewchild';
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
ChildComponent
  ],
  providers: [
    CommunicatorService,
    TasksService
  ],
  exports: [
    SiblingContainerComponent,
    ClickStopComponent,
    TaskListComponent,
    TaskFormComponent,
    ParentComponent
  ]
})
export class CommunicationModule { }
