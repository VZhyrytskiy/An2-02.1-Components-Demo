import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input()
  task: Task;

  @Output()
  completeTask: EventEmitter<Task> = new EventEmitter<Task>();

  onCompleteTask(): void {
    console.log('task component, completeTask method:', this.task);
    this.completeTask.emit(this.task);
  }
}
