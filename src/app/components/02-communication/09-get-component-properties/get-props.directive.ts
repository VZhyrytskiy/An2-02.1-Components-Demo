import {
  Directive,
  ElementRef, Input,
  inject,
  type OnInit
} from '@angular/core';
import { AccountComponent } from './account.component';

@Directive({
  selector: '[get-props]',
  standalone: true,
})
export class GetPropsDirective implements OnInit {
  // dependencies
  private el = inject(ElementRef);

  // inject host component
  private accountComponent = inject(AccountComponent, { host: true });

  @Input({ required: true })
  balance!: number;


  ngOnInit(): void {
    // directive input
    console.log(`Directive input (balance): ${this.balance}`);
    // component input
    console.log(`Component input (balance): ${this.accountComponent.balance}`);
    // component property
    console.log(
      `Component property (minBalance): ${this.accountComponent.minBalance}`
    );
    // Angular changes attribute 'balance'
    // so we can't get it directly
    console.log(
      `Component attribute (balance): ${this.el.nativeElement.getAttribute(
        'balance'
      )}`
    );
    // to attribute 'ng-reflect-balance'
    console.log(
      `Component attribute (ng-reflect-balance): ${this.el.nativeElement.getAttribute(
        'ng-reflect-balance'
      )}`
    );
  }
}
