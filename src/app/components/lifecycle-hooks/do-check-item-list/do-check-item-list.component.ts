import { Component, DoCheck, IterableDiffers, Input,
  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-do-check-item-list',
  templateUrl: 'do-check-item-list.component.html',
  styleUrls: ['do-check-item-list.component.css'],
})
export class DoCheckItemListComponent implements DoCheck {
  @Input() tasks: Array<any> = [];
  @Output() onRemove: EventEmitter<any>;
  differ: any;

  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.onRemove = new EventEmitter<any>();
  }

  ngDoCheck(): void {
    let changes = this.differ.diff(this.tasks);

    if (changes) {
        changes.forEachAddedItem(r => console.log(r));
        changes.forEachAddedItem(r => console.log('Added', r.item));
        changes.forEachRemovedItem(r => console.log('Removed', r.item));
    }
  }

  removeTask(task: any): void {
    this.onRemove.emit(task);
  }

}
