import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `<div>
              Account: <br>
              balance - {{balance}}<br>
              min balance - {{minBalance}}
             </div>`
})
export class AccountComponent {
  @Input() balance!: number;

  minBalance: number = 100;
}
