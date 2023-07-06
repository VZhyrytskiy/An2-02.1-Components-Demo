import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  SiblingContainer2Component,
  Sibling3Component,
  Sibling4Component
} from './06-service-communication-pull';
import { TheSameComponent, TheSameDirective } from './07-the-same';
import { AccountComponent, GetPropsDirective } from './08-get-component-properties';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AccountComponent,
    GetPropsDirective,
    Sibling3Component,
    Sibling4Component,
    SiblingContainer2Component,
    TheSameComponent,
    TheSameDirective,
  ],
  exports: [
    AccountComponent,
    GetPropsDirective,
    SiblingContainer2Component,
    TheSameComponent,
    TheSameDirective
  ]
})
export class CommunicationModule {}
