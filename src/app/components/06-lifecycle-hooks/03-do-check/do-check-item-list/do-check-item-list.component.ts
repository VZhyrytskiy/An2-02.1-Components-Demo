import {
  Component,
  OnInit,
  DoCheck,
  IterableDiffers,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IItem } from '../do-check-item/iitem.interface';

@Component({
  selector: 'app-do-check-item-list',
  templateUrl: './do-check-item-list.component.html',
  styleUrls: ['./do-check-item-list.component.css']
})
export class DoCheckItemListComponent implements OnInit, DoCheck {
  @Input()
  tasks: Array<IItem> = [];

  @Output() remove: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Output() setPriority: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Output() completeAction: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Output() clearAction: EventEmitter<IItem> = new EventEmitter<IItem>();

  private differ: any;

  constructor(private differs: IterableDiffers) {}

  ngOnInit() {
    this.differ = this.differs.find(this.tasks).create(null);
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.tasks);

    if (changes) {
      console.log(changes);
      // changes.forEachAddedItem(r => console.log(r));
      changes.forEachAddedItem(r => console.log('Added', r.item));
      changes.forEachRemovedItem(r => console.log('Removed', r.item));
    }
  }

  onSetPriority(item: IItem): void {
    this.setPriority.emit(item);
  }

  onCompleteAction(item: IItem): void {
    this.completeAction.emit(item);
  }

  onClearAction(item: IItem): void {
    this.clearAction.emit(item);
  }

  onRemove(item: IItem): void {
    this.remove.emit(item);
  }
}
