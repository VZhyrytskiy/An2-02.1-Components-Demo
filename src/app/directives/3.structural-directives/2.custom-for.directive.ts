import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appCustomFor]',
  standalone: true,
})
export class CustomForDirective implements OnInit {
  // a value for the parameter of type is {'$implicit': any, index: number}
  // '$implicit' - any value for let variable value
  // index - any value for let variable index
  private template = inject(TemplateRef<{ $implicit: any; index: number }>);
  private container = inject(ViewContainerRef);

  /**
   *  <ul>
   *    <li *appCustomFor="let value iterate values; let i=index">{{i+1}} {{value}}</li>
   *  <ul>
   */

  // a name of an input is a name of a directive + the keyword before array values
  @Input({ required: true, alias: 'appCustomForIterate' }) items!: any[];

  ngOnInit() {
    for (let i = 0; i < this.items.length; i++) {
      // use the second arg to pass context to the template
      const context = {
        index: i,
        $implicit: this.items[i],
      };
      this.container.createEmbeddedView(this.template, context);
    }
  }
}
