import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-demo1',
  standalone: true,
  templateUrl: './dynamic-component-demo1.component.html',
  styleUrls: ['./dynamic-component-demo1.component.css']
})
export class DynamicComponentDemo1Component {
  @ViewChild('vcr', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  onLoadComponent(): void {
    import('./dynamic-component.component')
    .then(module => {
      this.vcr.createComponent(module.DynamicComponent);
    })
    .catch(reason => console.log(reason));


  }
}
