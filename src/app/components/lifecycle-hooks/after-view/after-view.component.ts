import { Component, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';

import { ChildViewComponent } from './child-view';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.css']
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  private prevFirstName = '';

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    console.log('AfterViewInit');
  }

   ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevFirstName === this.viewChild.firstName) {
      console.log('AfterViewChecked: (no change)');
    } else {
      this.prevFirstName = this.viewChild.firstName;
      console.log(`AfterViewChecked: ${this.viewChild.firstName}`);
    }
  }

}
