import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-demo',
  templateUrl: './host-demo.component.html',
  styleUrls: ['./host-demo.component.css'],
  // tslint: Use@HostBindings and @HostListeners instead of the host property
  host: {
    // HostBindings
    ['class']: 'headingClass',
    // HostListeners
    '(click)': 'clicked()',
    '(mouseenter)': 'enter($event)',
    '(mouseleave)': 'leave($event)'
  }
})
export class HostDemoComponent implements OnInit {
  headingClass = true;
  constructor() { }

  ngOnInit() {
  }


  clicked() {
    console.log('click event on host element');
   }
  enter(event: Event) {
    console.log('mouseenter event on host element');
  }
  leave(event: Event) {
    console.log('mouseleave event on host element');
  }


}
