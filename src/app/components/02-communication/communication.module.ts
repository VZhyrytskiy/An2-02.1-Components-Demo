import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    TheSameComponent,
    TheSameDirective,
  ],
  exports: [
    AccountComponent,
    GetPropsDirective,
    TheSameComponent,
    TheSameDirective
  ]
})
export class CommunicationModule {}
