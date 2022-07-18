import { Component, type AfterContentChecked, type AfterContentInit, ContentChild } from '@angular/core';

import { ChildContentComponent } from './child-content/child-content.component';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  content!: string;

  // Query for a CONTENT child of type `ChildContentComponent`
  @ContentChild(ChildContentComponent) contentChild!: ChildContentComponent;

  private prevFirstName = '';

  ngAfterContentInit(): void {
    // viewChild is set after the view has been initialized
    console.log('AfterContentInit');
    // it is not necessary to postpone the update for one turn of the browser's JavaScript cycle
    // you CAN move this code to the ngAfterContentChecked
    this.content = this.contentChild.firstName;
  }

  ngAfterContentChecked(): void {
    // viewChild is updated after the view has been checked
    if (this.prevFirstName === this.contentChild.firstName) {
      console.log('AfterContentChecked: (no change)');
    } else {
      this.prevFirstName = this.contentChild.firstName;
      console.log(`AfterContentChecked: ${this.contentChild.firstName}`);
    }
  }

}
