import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-check-once-changed',
  standalone: true,
  template: `<div>
    <div>Number of ticks 1 (w/o ChangeDetectorRef): {{ numberOfTicks1 }}</div>
    <div>Number of ticks 2 (w/ markForCheck): {{ numberOfTicks2 }}</div>
    <div>Number of ticks 3 (w/ detach + detectChanges): {{ numberOfTicks3 }}</div>
    <button (click)="onClick()">Click me!</button>
  </div> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChechOnceChangedComponent implements OnInit {
  private ref = inject(ChangeDetectorRef);

  numberOfTicks1 = 0;
  numberOfTicks2 = 0;
  numberOfTicks3 = 0;

  ngOnInit(): void {
    // Case 1: ChangeDetectorRef is not used
    // the template of the component will not be updated without ChangeDetectorRef, Event, Input
    setInterval(() => {
      this.numberOfTicks1++;
    }, 1000);

    // Case 2: ChangeDetectorRef is used
    // UNCOMMENT THIS CODE TO SEE THE DIFFERENCE
    // setInterval(() => {
    //   this.numberOfTicks2++;
    //   // Components are normally marked as dirty (in need of rerendering)
    //   // when inputs have changed or events have fired in the view.
    //   // Call this method to ensure that a component is checked
    //   // even if these triggers have not occurred.
    //   this.ref.markForCheck();
    // }, 1000);

    // Case 3: detach + detectChanges
    // UNCOMMENT THIS CODE TO SEE THE DIFFERENCE
    this.ref.detach();
    setInterval(() => {
      this.numberOfTicks3++;
      // Components are normally marked as dirty (in need of rerendering)
      // when inputs have changed or events have fired in the view.
      // Call this method to ensure that a component is checked
      // even if these triggers have not occurred.
      this.ref.detectChanges();
    }, 5000); // <= 5 seconds
  }

  // Case 4: click event
  // when we click on the button, the view is updated
  // because the event in the component occurs
  onClick() {}
}
