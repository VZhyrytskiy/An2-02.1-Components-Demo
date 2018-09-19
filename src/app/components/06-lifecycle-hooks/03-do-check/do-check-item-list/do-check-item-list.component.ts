import {
  Component,
  OnInit,
  DoCheck,
  ChangeDetectorRef,
  IterableDiffers,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-do-check-item-list',
  templateUrl: './do-check-item-list.component.html',
  styleUrls: ['./do-check-item-list.component.css']
})
export class DoCheckItemListComponent implements OnInit, DoCheck {
  @Input()
  tasks: Array<any> = [];
  @Output()
  remove: EventEmitter<any> = new EventEmitter<any>();

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

  removeTask(task: any): void {
    this.remove.emit(task);
  }
}
