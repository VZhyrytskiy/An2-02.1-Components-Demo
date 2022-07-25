import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnInit {

/**
 *  Shorthand Form
 *  <div *appCustomIf="visible">
 *    <span>You may see content</span>
 *  </div>
 *
 *  FullForm
 *  // wraps a template in ng-template element
 *  <ng-template [ngIf]="visible">
 *    <div>
 *      <span>You may see content</span>
 *    </div>
 *   </ng-template>
 *
 *   // a placeholder space, called embedded view,
 *   // where the directive can decide what to insert inside of this
 *   <ng-container></ng-container>
 */

  // the name of the input is the same as the name of the directive
  @Input() appCustomIf!: boolean;

  constructor(
    // a reference to content enclosed within the <ng-template>
    private template: TemplateRef<any>,

    // a reference to a placeholder <ng-container> where the directive may put any content
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
      if (this.appCustomIf) {
        this.container.createEmbeddedView(this.template);
      }
  }

}
