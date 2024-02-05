import {
  Component,
  type AfterViewChecked,
  type AfterViewInit,
  ViewChild
} from '@angular/core';

import { ChildViewComponent } from './child-view/child-view.component';

@Component({
  selector: 'app-after-view',
  standalone: true,
  templateUrl: './after-view.component.html',
  styleUrl: './after-view.component.css',
  imports: [ChildViewComponent]
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {
  content!: string;

  // Query for a VIEW child of type `ChildViewComponent`
  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  private prevFirstName = '';

  ngAfterViewInit(): void {
    // viewChild is set after the view has been initialized
    console.log('AfterViewInit');
    // postpone the update for one turn of the browser's JavaScript
    // cycle, which triggers a new change-detection cycle.
    // you can NOT move this code to the ngAfterViewChecked
    setTimeout(() => {
      this.content = this.viewChild.firstName;
    }, 0);
  }

  ngAfterViewChecked(): void {
    // viewChild is updated after the view has been checked
    if (this.prevFirstName === this.viewChild.firstName) {
      console.log('AfterViewChecked: (no change)');
    } else {
      this.prevFirstName = this.viewChild.firstName;
      console.log(`AfterViewChecked: ${this.viewChild.firstName}`);
    }
  }
}
