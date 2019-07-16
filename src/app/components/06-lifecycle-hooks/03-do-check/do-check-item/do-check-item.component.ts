import {
  Component,
  OnInit,
  DoCheck,
  EventEmitter,
  Input,
  KeyValueDiffers,
  Output
} from '@angular/core';

import { IItem } from './iitem.interface';

@Component({
  selector: 'app-do-check-item',
  templateUrl: './do-check-item.component.html',
  styleUrls: ['./do-check-item.component.css']
})
export class DoCheckItemComponent implements OnInit, DoCheck {
  @Input() item: IItem;

  @Output() remove: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Output() setPriority: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Output() completeAction: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Output() clearAction: EventEmitter<IItem> = new EventEmitter<IItem>();

  private differ: any;

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit() {
    this.differ = this.differs.find(this.item).create();
  }

  ngDoCheck(): void {
    // changes is an instance of DefaultKeyValueDiffer Class
    const changes = this.differ.diff(this.item);

    if (changes) {
      console.log(changes);
      changes.forEachAddedItem(item => this.logChange('added', item));
      changes.forEachRemovedItem(item => this.logChange('removed', item));
      changes.forEachChangedItem(item => this.logChange('changed', item));
    }
  }

  // add value
  onSetPriority(): void {
    this.setPriority.emit(this.item);
  }

  // change value
  onCompleteAction(): void {
    this.item.done = true;
    this.completeAction.emit(this.item);
  }

  // remove value
  onClearAction(): void {
    this.clearAction.emit(this.item);
  }

  // remove item from collection
  // do-check-item-list demo
  onRemoveItem(): void {
    this.remove.emit(this.item);
  }

  private logChange(action: string, item): void {
    if (action === 'changed') {
      console.log(
        item.key,
        action,
        'from',
        item.previousValue,
        'to',
        item.currentValue
      );
    }
    if (action === 'added') {
      console.log(action, item.key, 'with', item.currentValue);
    }
    if (action === 'removed') {
      console.log(action, item.key, `(was ${item.previousValue})`);
    }
  }
}
