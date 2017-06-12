import { Component, DoCheck, OnChanges,
  EventEmitter, Input, KeyValueDiffers, Output, SimpleChanges } from '@angular/core';

interface IItem {
  action: string;
  responsible: string;
  done: boolean;
  priority?: boolean;
}

@Component({
  selector: 'app-do-check-item',
  templateUrl: 'do-check-item.component.html',
  styleUrls: ['do-check-item.component.css']
})
export class DoCheckItemComponent implements DoCheck /*, OnChanges*/ {
    @Input() item: IItem;
    // do-check-item-list demo
    @Output() onRemove: EventEmitter<IItem>;

    differ: any;

  constructor(differs: KeyValueDiffers) {
      this.differ = differs.find([]).create(null);
      this.onRemove = new EventEmitter<IItem>();
  }

  /*
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes Hook');

    for (let  propName in changes) {
      if (changes.hasOwnProperty (propName)) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        console.log(`Is First Change: ${chng.isFirstChange()}`);
      }
    }
  }
  */

  ngDoCheck(): void {
      // changes is an instance of DefaultKeyValueDiffer Class
      let  changes = this.differ.diff(this.item);

      if (changes) {
        console.log(changes);
          changes.forEachAddedItem(item => this.logChange('added', item));
          changes.forEachRemovedItem(item => this.logChange('removed', item));
          changes.forEachChangedItem(item => this.logChange('changed', item));
      }
  }

  logChange(action: string, item): void {
      if (action === 'changed') {
          console.log(item.key, action, 'from', item.previousValue, 'to', item.currentValue);
      }
      if (action === 'added') {
          console.log(action, item.key, 'with', item.currentValue);
      }
      if (action === 'removed') {
          console.log(action, item.key, `(was ${item.previousValue})`);
      }
  }

  // add value
  setPriority(): void {
    this.item.priority = true;
  }

  // change value
  complete(): void {
      this.item.done = true;
  }

  // remove value
  clear(): void {
      delete this.item.action;
  }

  // remove item from collection
  // do-check-item-list demo
  remove(): void {
      this.onRemove.emit(this.item);
  }

}
