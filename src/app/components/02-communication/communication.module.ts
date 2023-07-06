import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountComponent, GetPropsDirective } from './08-get-component-properties';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AccountComponent,
    GetPropsDirective,
  ],
  exports: [
    AccountComponent,
    GetPropsDirective,
  ]
})
export class CommunicationModule {}
