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
  exports: [ContainerComponent, DynamicComponentDemo1Component],

  // Если селектор компонента не появляется в темплейте другого компонента,
  // то Ангуляр не создает для таких компонентов ComponentFactory.
  // Чтобы Ангуляр генерил ComponentFactory для динамически загружаемых компонентов
  // их необходимо добавить в секцию entryComponents
  entryComponents: [Component1Component, Component2Component, DynamicComponent]
})
export class DynamicComponentLoadingModule {}
