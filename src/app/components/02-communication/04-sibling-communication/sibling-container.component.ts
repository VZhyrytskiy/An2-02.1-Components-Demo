import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling-container',
  template: `
    <div>
      <app-sibling1></app-sibling1>
      <app-sibling2></app-sibling2>
    </div>
  `
})
export class SiblingContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
