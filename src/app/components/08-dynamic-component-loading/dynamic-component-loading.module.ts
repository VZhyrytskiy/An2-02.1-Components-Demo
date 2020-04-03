import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  TargetDirective,
  Component1Component,
  Component2Component,
} from './demo2-dir';
import { ContainerComponent } from './demo2-dir/container.component';
import {
  DynamicComponentDemo1Component,
  DynamicComponent
} from './demo1-trv';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    Component1Component,
    Component2Component,
    ContainerComponent,
    TargetDirective,
    DynamicComponentDemo1Component,
    DynamicComponent
  ],
  exports: [ContainerComponent, DynamicComponentDemo1Component]
})
export class DynamicComponentLoadingModule {}
