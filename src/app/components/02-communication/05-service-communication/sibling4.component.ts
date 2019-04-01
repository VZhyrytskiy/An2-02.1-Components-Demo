import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-sibling4',
  template: `
    <p>
      sibling4
      <br />
      Data from sibling 1: {{ input }}
    </p>
  `
})
export class Sibling4Component {
  constructor(private dataService: DataService<string>) {}

  get input(): string {
    return this.dataService.getData();
  }
}
