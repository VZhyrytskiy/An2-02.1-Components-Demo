import { Directive, OnChanges, SimpleChange, SimpleChanges, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[v-if]'
})
export class VIfDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('v-if')
  trueFalseExpression: boolean;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['trueFalseExpression'];

    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }



}
