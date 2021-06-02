import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

@Component({
  selector: 'app-dynamic-component-demo1',
  templateUrl: './dynamic-component-demo1.component.html',
  styleUrls: ['./dynamic-component-demo1.component.css']
})
export class DynamicComponentDemo1Component {
  @ViewChild('vcr', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  constructor(private r: ComponentFactoryResolver) {}

  onLoadComponent(): void {
    import('./dynamic-component.component')
    .then(module => {
      const factory = this.r.resolveComponentFactory(module.DynamicComponent);
      this.vcr.createComponent(factory);
    })
    .catch(reason => console.log(reason));


  }
}
