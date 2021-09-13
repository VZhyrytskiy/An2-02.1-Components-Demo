import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TaskListComponent,
  TaskFormComponent,
  TaskComponent,
  ParentChildCommunicationComponent
} from './01-input-output';
import {
  ClickStopComponent,
  ClickStopDirective
} from './02-output-event-directive';
import { ParentComponent, ChildComponent } from './03-viewchild-viewchildren';
import { ExportAsDemoComponent, ExportAsDirective } from './04-export-as';
import {
  SiblingContainerComponent,
  Sibling1Component,
  Sibling2Component
} from './05-service-communication-push';
import {
  SiblingContainer2Component,
  Sibling3Component,
  Sibling4Component
} from './06-service-communication-pull';
import { TheSameComponent, TheSameDirective } from './07-the-same';
import { ChildNgForComponent } from './03-viewchild-viewchildren/child-ng-for/child-ng-for.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
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
    ChildComponent,
    ExportAsDemoComponent,
    ExportAsDirective,
    TheSameComponent,
    TheSameDirective,
    ChildNgForComponent
  ],
  exports: [
    SiblingContainerComponent,
    SiblingContainer2Component,
    ClickStopComponent,
    ParentChildCommunicationComponent,
    ParentComponent,
    ExportAsDemoComponent,
    TheSameComponent,
    TheSameDirective
  ]
})
export class CommunicationModule {}
