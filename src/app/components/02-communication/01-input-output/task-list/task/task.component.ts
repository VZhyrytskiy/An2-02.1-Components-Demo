import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Task } from './../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  private _task!: Task;

  @Input()
  get task(): Task {
    return this._task;
  };

  set task(value: Task) {
    // intercept input property changes w/ setter
    console.log('intercept input property changes w/ setter');
    this._task = value;
  }

  @Output()
  completeTask: EventEmitter<Task> = new EventEmitter<Task>();

  onCompleteTask(): void {
    console.log('task component, completeTask method:', this.task);
    this.completeTask.emit(this.task);
  }
}
