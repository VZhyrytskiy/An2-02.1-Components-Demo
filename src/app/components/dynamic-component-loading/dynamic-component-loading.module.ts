import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';
import { ContainerComponent } from './container/container.component';

import { TargetDirective } from './target.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  Component1Component,
  Component2Component,
  ContainerComponent,
    TargetDirective],

  exports: [ContainerComponent],
  entryComponents: [Component1Component, Component2Component]
})
export class DynamicComponentLoadingModule { }
