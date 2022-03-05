import { Component, Output, EventEmitter } from '@angular/core';

import { Task } from './../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();

  onAddTask(action: string, priority: number, estHours: number): void {
    if (!(action && priority && estHours)) {
      return;
    }
    
    const task = new Task(
      null,
      action,
      priority,
      estHours
    );

    this.addTask.emit(task);
    console.log('add task method', task);
  }
}
