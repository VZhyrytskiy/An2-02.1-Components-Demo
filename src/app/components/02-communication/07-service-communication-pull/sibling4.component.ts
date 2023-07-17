import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-sibling4',
  standalone: true,
  template: `
    <p>
      sibling4
      <br />
      <!-- case 1 -->
      Data from sibling 1: {{ dataService.getData() }}
      <!-- case 2 -->
      <!-- Data from sibling 1: {{ input }} -->
    </p>
  `
})
export class Sibling4Component {
  // case 1
  constructor(public dataService: DataService<string>) {}

  // case 2
  // constructor(private dataService: DataService<string>) {}
  // get input(): string {
    // return this.dataService.getData();
  // }
}
