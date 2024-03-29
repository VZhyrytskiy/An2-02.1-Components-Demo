import { Component, Input, type OnInit, type OnChanges, type SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  standalone: true,
  templateUrl: './on-changes.component.html',
  styleUrl: './on-changes.component.css'
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input({ required: true })
  responsible!: string;

  @Input({ required: true })
  action!: string;

  constructor() {
    console.log('On Constructor');
  }

  ngOnInit(): void {
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
