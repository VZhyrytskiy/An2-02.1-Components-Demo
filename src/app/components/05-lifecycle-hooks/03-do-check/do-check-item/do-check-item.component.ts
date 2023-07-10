import { Component, EventEmitter, Input, KeyValueDiffers, Output } from '@angular/core';
import type { OnInit, DoCheck, KeyValueDiffer, KeyValueChangeRecord, SimpleChanges, OnChanges } from '@angular/core';
import type { TaskModel } from '../task.model';

@Component({
  selector: 'app-do-check-item',
  standalone: true,
  templateUrl: './do-check-item.component.html',
  styleUrls: ['./do-check-item.component.css']
})
export class DoCheckItemComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  item!: TaskModel;

  @Output() remove: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() setPriority: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() completeAction: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() clearAction: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  private differ!: KeyValueDiffer<any, any>;

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit(): void {
    this.differ = this.differs.find(this.item).create();
  }

  ngOnChanges(ch: SimpleChanges): void {
    console.log('ngOnChanges:');
    console.log(ch);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck:');
    // changes is an instance of DefaultKeyValueDiffer Class
    const changes = this.differ.diff(this.item);

    if (changes) {
      console.log(changes);
      changes.forEachAddedItem((item: KeyValueChangeRecord<any, any>) => this.logChange('added', item));
      changes.forEachRemovedItem((item: KeyValueChangeRecord<any, any>) => this.logChange('removed', item));
      changes.forEachChangedItem((item: KeyValueChangeRecord<any, any>) => this.logChange('changed', item));
    }
  }

  // add value
  onSetPriority(): void {
    this.setPriority.emit(this.item);
  }

  // change value
  onCompleteAction(): void {
    // this.item.done = true;
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

  private logChange(action: string, item: KeyValueChangeRecord<any, any>): void {
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
