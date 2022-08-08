import { Component, ViewChild, type OnInit, Type } from '@angular/core';

import {
  type DynamicComponent,
  TargetDirective,
  Component1Component,
  Component2Component
} from '.';

@Component({
  selector: 'app-dynamic-component-loading',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {
  // Получить экземпляр директивы
  // static = true, because it uses in ngOnInit
  @ViewChild(TargetDirective, { static: true }) target!: TargetDirective;

  private currentComponent: any = Component1Component;

  ngOnInit(): void {
    this.loadComponent(this.currentComponent);
  }

  onSwitchView() {
    this.currentComponent =
      this.currentComponent.name === 'Component1Component'
        ? Component2Component
        : Component1Component;

    this.loadComponent(this.currentComponent);
  }

  private loadComponent(component: Type<Component1Component | Component2Component>) {
    // Получить место, куда необходимо добавлять компонент и очистить его
    // Используем для этого директиву target
    // Директива инжектит через свой конструктор viewContainerRef как публичное свойство,
    // Мы его тут используем
    const viewContainerRef = this.target.viewContainerRef;
    viewContainerRef.clear();

    // Добавить компонент в темплейт
    // Метод createComponent() возвращает ссылку на динамически загруженый компонент.
    // Эту ссылку можно использовать для взаимодействия с компонентом,
    // например, для присвоения каких-то значений его свойствам или для вызова его методов.
    const componentRef = viewContainerRef.createComponent(component);

    // Передать данные компоненту
    // не запускает ngOnChanges
    // not marked for check
    (componentRef.instance as DynamicComponent).data = 'Data for Component';

    // since v14.1
    // запускает ngOnChanges
    // marked for check
    componentRef.setInput('data', 'Data for Component');
    // add type-safe
    const data: keyof DynamicComponent = 'data';
    componentRef.setInput(data, 'Data for Component');

    // Вызвать метод компонента
    (componentRef.instance as DynamicComponent).notify();
  }
}
