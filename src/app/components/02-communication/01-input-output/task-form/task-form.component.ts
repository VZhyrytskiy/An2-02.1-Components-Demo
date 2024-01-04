import { Component, Output, EventEmitter } from '@angular/core';

import { TaskModel } from './../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() addTask: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  onAddTask(action: string, priority: number, estHours: number): void {
    if (!(action && priority && estHours)) {
      return;
    }

    const task = new TaskModel(
      null,
      action,
      priority,
      estHours
    );

    this.addTask.emit(task);
    console.log('add task method', task);
  }
}
