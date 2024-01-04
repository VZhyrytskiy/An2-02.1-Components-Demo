import { Component, inject } from '@angular/core';

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
      <!-- Data from sibling 1: {{ content }} -->
    </p>
  `,
})
export class Sibling4Component {
  // case 1
  dataService = inject(DataService<string>);

  // case 2
  // private dataService = inject(DataService<string>);

  // get content(): string {
  //   return this.dataService.getData();
  // }
}
