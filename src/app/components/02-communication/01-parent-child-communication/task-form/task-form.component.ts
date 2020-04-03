import { Component, Output, EventEmitter } from '@angular/core';

import { Task } from './../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();

  onAddTask(newTask: Partial<Task>): void {
    const task = new Task(
      null,
      newTask.action,
      newTask.priority,
      newTask.estHours
    );

    this.addTask.emit(task);
    console.log('add task method', task);
  }
}
