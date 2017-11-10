import { ComponentFactoryResolver, ComponentRef, Directive,
  ElementRef, Injector, Input, HostListener, OnDestroy, Renderer2,
  TemplateRef, Type, ViewContainerRef
} from '@angular/core';

import { TooltipComponent } from './../components/tooltip/tooltip.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {
  // На вход мы можем передать:
  //  1. Строку
  //  2. Шаблон (TemplateRef)
  //  3. Компонент
  // tslint:disable-next-line:no-input-rename
  @Input('tooltip') content: string | TemplateRef<any> | Type<any>;

  private tooltipComponentRef: ComponentRef<TooltipComponent>;

  constructor(
    private element: ElementRef,
    private renderer2: Renderer2,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  // слушаем событие mouseenter на хост компоненте и создаем TooltipComponent
  @HostListener('mouseenter') mouseenter() {
    if (this.tooltipComponentRef) {
      return;
    }

    const factory =
      this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);

    // Мы используем Injector.create() метод,
    // который резолвит массив повайдеров и создает injector
    // с этих провайдеров.
    const injector = Injector.create(
      [{
        provide: 'tooltipConfig',
        useValue: {
          // Мы передаем объект с одним свойтвом - хостэлемент
          // Таким образом мы можем высчитать позицию tooltip.
          // В реальном примере, обычно, передается больше свойств,
          // таких как расположение tooltip, анимация, и т.д.
          host: this.element.nativeElement
        }
      }]
    );
    // Мы можем передать этот же объект как Input() TooltipComponent,
    // Например
    // this.componentRef.instance.config = config
    // Но может появиться ошмбка
    // “EXCEPTION: Expression has changed after it was checked.”

    this.tooltipComponentRef =
      this.viewContainerRef
                      // componentFactory, index, injector, projectableNodes
        .createComponent(factory, 0, injector, this.generateNgContent());
  }

  // Когда мышка уходит с элемента, разрушаем TooltipComponent
  @HostListener('mouseout') mouseout() {
    this.destroy();
  }

  ngOnDestroy() {
    this.destroy();
  }

  private destroy() {
    if (this.tooltipComponentRef) {
      this.tooltipComponentRef.destroy();
    }
    this.tooltipComponentRef = null;
  }

  private generateNgContent(): any[] {
    if (typeof this.content === 'string') {
      const element = this.renderer2.createText(this.content);
      return [[element]];
    }

    if (this.content instanceof TemplateRef) {
      const context = {};

      const viewRef = this.content.createEmbeddedView(context);
      return [viewRef.rootNodes];
    }

    // this.content === component
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(this.content);

    // Создаем новый компонент
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }
}
