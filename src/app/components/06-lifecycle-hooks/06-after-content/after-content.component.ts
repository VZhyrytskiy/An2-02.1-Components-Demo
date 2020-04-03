import { Component, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';

import { ChildContentComponent } from './child-content/child-content.component';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  // Query for a CONTENT child of type `ChildContentComponent`
  @ContentChild(ChildContentComponent) contentChild: ChildContentComponent;

  private prevFirstName = '';

  ngAfterContentInit() {
    // viewChild is set after the view has been initialized
    console.log('AfterContentInit');
  }

   ngAfterContentChecked() {
    // viewChild is updated after the view has been checked
    if (this.prevFirstName === this.contentChild.firstName) {
      console.log('AfterContentChecked: (no change)');
    } else {
      this.prevFirstName = this.contentChild.firstName;
      console.log(`AfterContentChecked: ${this.contentChild.firstName}`);
    }
  }

}
