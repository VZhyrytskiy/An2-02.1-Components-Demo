import { Directive, ElementRef, Host, Input, OnInit } from '@angular/core';
import { AccountComponent } from './account.component';

@Directive({
  selector: '[get-props]'
})
export class GetPropsDirective implements OnInit {
  @Input() balance!: number;

  constructor(
    private el: ElementRef,
    // inject host component
    @Host() private account: AccountComponent
  ) {}

  ngOnInit(): void {
    // directive input
    console.log(`Directive input (balance): ${this.balance}`);
    // component input
    console.log(`Component input (balance): ${this.account.balance}`);
    // component property
    console.log(`Component property (minBalance): ${this.account.minBalance}`);
    // Angular changes attribute 'balance'
    console.log(`Component attribute (balance): ${this.el.nativeElement.getAttribute('balance')}`);
    // to attribute 'ng-reflect-balance'
    console.log(`Component attribute (ng-reflect-balance): ${this.el.nativeElement.getAttribute('ng-reflect-balance')}`);
  }
}
