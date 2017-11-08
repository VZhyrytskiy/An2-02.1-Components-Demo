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


  // Если селектор компонента не появляется в темплейте другого компонента,
  // то Ангуляр не создает для таких компонентов ComponentFactory.
  // Чтобы Ангуляр генерил ComponentFactory для динамически загружаемых компонентов
  // их необходимо добавить в секцию entryComponents
  entryComponents: [Component1Component, Component2Component]
})
export class DynamicComponentLoadingModule { }
