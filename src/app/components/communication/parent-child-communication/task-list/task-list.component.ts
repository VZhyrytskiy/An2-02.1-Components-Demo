import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { Task } from './../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input()  tasks: Array<Task>;
  @Output() complete: EventEmitter<Task>;

  constructor() {
    this.complete = new EventEmitter();
  }

  ngOnInit() {
  }

  onCompleteTask(task: Task): void {
    console.log('task-list component, completeTask method', task);
    this.complete.emit(task);
  }

}
