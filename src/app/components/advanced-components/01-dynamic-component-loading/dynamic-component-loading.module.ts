import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TargetDirective, Component1Component, Component2Component, ContainerComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    Component1Component,
    Component2Component,
    ContainerComponent,
    TargetDirective
  ],
  exports: [ContainerComponent],
  entryComponents: [Component1Component, Component2Component]
})
export class DynamicComponentLoadingModule { }
