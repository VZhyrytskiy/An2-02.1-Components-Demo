import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'v-if-demo',
  template: `
    <div class="checkbox">
      <label>
        <input type="checkbox" [(ngModel)]='showContent' />
        Show Content
      </label>
    </div>
    <!-- Полный синтаксис -->
    <ng-template [v-if]="showContent">
      <div>
        Some Content 1
      </div>
    </ng-template>
    <!-- Короткий синтаксис -->
    <div *v-if="showContent">
      Some Content 2
    </div>
  `
})
export class VIfDemoComponent implements OnInit {
  showContent = false;

  constructor() { }

  ngOnInit() {
  }

}
