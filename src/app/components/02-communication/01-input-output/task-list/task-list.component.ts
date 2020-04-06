import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input()
  tasks: Array<Task>;

  @Output()
  completeTask: EventEmitter<Task> = new EventEmitter();

  onCompleteTask(task: Task): void {
    console.log('task-list component, completeTask method', task);
    this.completeTask.emit(task);
  }
}
