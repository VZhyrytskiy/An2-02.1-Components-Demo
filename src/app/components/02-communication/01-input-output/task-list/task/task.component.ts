import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type TaskModel } from './../../models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  private _task!: TaskModel;

  @Input({ required: true })
  get task(): TaskModel {
    return this._task;
  };

  set task(value: TaskModel) {
    // intercept input property changes w/ setter
    console.log('intercept input property changes w/ setter');
    this._task = value;
  }

  @Output()
  completeTask: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  onCompleteTask(): void {
    console.log('task component, completeTask method:', this.task);
    this.completeTask.emit(this.task);
  }
}
