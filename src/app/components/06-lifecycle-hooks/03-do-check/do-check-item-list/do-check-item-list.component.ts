import {
  Component,
  OnInit,
  DoCheck,
  IterableDiffers,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { TaskModel } from '../do-check-item/task.model';

@Component({
  selector: 'app-do-check-item-list',
  templateUrl: './do-check-item-list.component.html',
  styleUrls: ['./do-check-item-list.component.css']
})
export class DoCheckItemListComponent implements OnInit, DoCheck {
  @Input() tasks: Array<TaskModel> = [];

  @Output() remove: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() setPriority: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() completeAction: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();
  @Output() clearAction: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  private differ: any;

  constructor(private differs: IterableDiffers) {}

  ngOnInit() {
    this.differ = this.differs.find(this.tasks).create(null);
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.tasks);

    if (changes) {
      console.log(changes);
      changes.forEachAddedItem(r => console.log('Added', r.item));
      changes.forEachRemovedItem(r => console.log('Removed', r.item));
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
