import { Component, OnInit, DoCheck, ChangeDetectorRef, EventEmitter, Input, KeyValueDiffers, Output, SimpleChanges } from '@angular/core';

interface IItem {
  action: string;
  responsible: string;
  done: boolean;
  priority?: boolean;
}

@Component({
  selector: 'app-do-check-item',
  templateUrl: './do-check-item.component.html',
  styleUrls: ['./do-check-item.component.css']
})
export class DoCheckItemComponent implements OnInit, DoCheck {
  @Input() item: IItem;
  @Output() onRemove: EventEmitter<IItem> = new EventEmitter<IItem>();

  differ: any;

  constructor(
    private differs: KeyValueDiffers,
    private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
      this.differ = this.differs.find(this.item).create();
  }

  ngDoCheck(): void {
      // changes is an instance of DefaultKeyValueDiffer Class
      const  changes = this.differ.diff(this.item);

      if (changes) {
        console.log(changes);
          changes.forEachAddedItem(item => this.logChange('added', item));
          changes.forEachRemovedItem(item => this.logChange('removed', item));
          changes.forEachChangedItem(item => this.logChange('changed', item));
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

  private logChange(action: string, item): void {
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

}
