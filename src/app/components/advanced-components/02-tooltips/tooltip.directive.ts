import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input,
  HostListener,
  OnDestroy,
  ReflectiveInjector,
  Renderer2,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { TooltipComponent } from './tooltip.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy{
  // We can pass string, template or component
  // tslint:disable-next-line:no-input-rename
  @Input('tooltip') content: string | TemplateRef<any> | Type<any>;

  private componentRef: ComponentRef<TooltipComponent>;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }

  // listen to the mouseenter event and create the tooltip component
  @HostListener('mouseenter') mouseenter() {
    if (this.componentRef) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(TooltipComponent);

    // Maybe it should be change to StaticInjector from v.5
    // We can use the resolveAndCreate() method,
    // which resolves an array of providers and creates an injector
    // from those providers.
    const injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'tooltipConfig',
        useValue: {
          // we pass an object with only one property,
          // the host element, so we can calculate the tooltip position.
          // In real life, you will pass more things, such as the tooltip placement,
          // animation, etc.
          host: this.element.nativeElement
        }
      }
    ]);
    // We can pass the same object as an Input() to the tooltip component,
    // for instance
    // this.componentRef.instance.config = config
    // but we want to avoid dealing with errors like
    // “EXCEPTION: Expression has changed after it was checked.”

    this.componentRef = this.vcr.createComponent(factory, 0, injector, this.generateNgContent());
  }

  @HostListener('mouseout')
  mouseout() {
    this.destroy();
  }

  private destroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.componentRef = null;
  }

  ngOnDestroy() {
    this.destroy();
  }

  private generateNgContent(): any[] {
    if ( typeof this.content === 'string' ) {
      const element = this.renderer.createText(this.content);
      return [ [ element ] ];
    }

    if ( this.content instanceof TemplateRef ) {
      const context = {};
      const viewRef = this.content.createEmbeddedView(context);
      // In earlier versions, you may need to add this line
      // this.appRef.attachView(viewRef);
      return [ viewRef.rootNodes ];
    }

    // Else it's a component
    const factory = this.resolver.resolveComponentFactory(this.content);
    const componentRef = factory.create(this.injector);
    // In earlier versions, you may need to add this line
    // this.appRef.attachView(componentRef.hostView);
    return [ [ componentRef.location.nativeElement ] ];
  }
}
