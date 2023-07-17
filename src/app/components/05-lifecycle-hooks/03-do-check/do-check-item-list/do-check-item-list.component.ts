import { Component, IterableDiffers, Input, Output, EventEmitter } from '@angular/core';
import type {OnInit, DoCheck, IterableDiffer, IterableChanges, IterableChangeRecord } from '@angular/core';
import type { TaskModel } from '../task.model';
import { NgForOf } from '@angular/common';
import { DoCheckItemComponent } from '../do-check-item/do-check-item.component';


@Component({
  selector: 'app-do-check-item-list',
  standalone: true,
  templateUrl: './do-check-item-list.component.html',
  styleUrls: ['./do-check-item-list.component.css'],
  imports: [NgForOf, DoCheckItemComponent]
})
export class DoCheckItemListComponent implements OnInit, DoCheck {
  @Input({ required: true }) tasks: Array<TaskModel> = [];

  @Output() remove: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() setPriority: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() completeAction: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() clearAction: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  private differ!: IterableDiffer<TaskModel>  ;

  constructor(private differs: IterableDiffers) {}

  ngOnInit(): void {
    this.differ = this.differs.find(this.tasks).create();
  }

  ngDoCheck(): void {
    const changes: IterableChanges<TaskModel> | null = this.differ.diff(this.tasks);

    if (changes) {
      console.log(changes);
      changes.forEachAddedItem((r: IterableChangeRecord<TaskModel>) => console.log('Added', r.item));
      changes.forEachRemovedItem((r: IterableChangeRecord<TaskModel>) => console.log('Removed', r.item));
    }
  }

  onSetPriority(item: TaskModel): void {
    this.setPriority.emit(item);
  }

  onCompleteAction(item: TaskModel): void {
    this.completeAction.emit(item);
  }

  onClearAction(item: TaskModel): void {
    this.clearAction.emit(item);
  }

  onRemove(item: TaskModel): void {
    this.remove.emit(item);
  }
}
