import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AutoExpandTextareaComponent, AutoExpandTextareaDemoComponent, SplitterDirective, SplitterDemoComponent } from '.';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AutoExpandTextareaComponent,
    AutoExpandTextareaDemoComponent,
    SplitterDemoComponent,
    SplitterDirective
  ],
  exports: [
    AutoExpandTextareaDemoComponent,
    SplitterDemoComponent
  ]
})
export class CustomControlsModule { }
