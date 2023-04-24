import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { AccountComponent, GetPropsDirective } from './08-get-component-properties';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AccountComponent,
    GetPropsDirective,
    Sibling1Component,
    Sibling2Component,
    Sibling3Component,
    Sibling4Component,
    SiblingContainerComponent,
    SiblingContainer2Component,
    ClickStopDirective,
    ClickStopComponent,
    ParentComponent,
    ChildComponent,
    ExportAsDemoComponent,
    ExportAsDirective,
    TheSameComponent,
    TheSameDirective,
    ChildNgForComponent
  ],
  exports: [
    AccountComponent,
    GetPropsDirective,
    SiblingContainerComponent,
    SiblingContainer2Component,
    ClickStopComponent,
    ParentComponent,
    ExportAsDemoComponent,
    TheSameComponent,
    TheSameDirective
  ]
})
export class CommunicationModule {}
