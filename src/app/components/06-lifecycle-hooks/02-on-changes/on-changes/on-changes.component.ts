import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input() responsible: string;
  @Input() action: string;

  constructor() {
    console.log('On Constructor');
  }

  ngOnInit() {
    console.log('On Init Hook');
  }
    /*
    {
        responsible: {
            currentValue: "new responsible value",
            previousValue: "old responsible value"
        },
        action: {
            currentValue: "new action value",
            previousValue: "old action value"
        }
    }
    */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes Hook');

    for (const propName in changes) {
      if (changes.hasOwnProperty (propName)) {
        const chng = changes[propName];
        const cur  = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        console.log(`Is First Change: ${chng.isFirstChange()}`);
      }
    }
  }
}
