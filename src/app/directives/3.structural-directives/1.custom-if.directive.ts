import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
  standalone: true,
})
export class CustomIfDirective implements OnInit {
  // dependencies
  // a reference to content enclosed within the <ng-template>
  private template = inject(TemplateRef<any>);

  // a reference to a placeholder <ng-container> where the directive may put any content
  private container = inject(ViewContainerRef);

  /**
   *  Shorthand Form
   *  <div *appCustomIf="visible">
   *    <span>You may see content</span>
   *  </div>
   *
   *  FullForm
   *  // wraps a template in ng-template element
   *  <ng-template [appCustomIf]="visible">
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
  @Input({ required: true }) appCustomIf!: boolean;

  ngOnInit(): void {
    if (this.appCustomIf) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
