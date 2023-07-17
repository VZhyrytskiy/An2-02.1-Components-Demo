import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '@angular/common';

import { type TaskModel } from './../models/task.model';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [NgForOf, TaskComponent]
})
export class TaskListComponent {
  // input is configurable as `required` and bound to `data-input` attribute,
  // `transform` is a function which transforms the input value before assigning it
  // to the directive/component instance.
  // old-fashion way @Input('data-input')
  @Input( { required: true, alias: 'data-input', transform: (value: TaskModel[]) => value })
  tasks!: TaskModel[];

  @Output()
  completeTask: EventEmitter<TaskModel> = new EventEmitter();

  onCompleteTask(task: TaskModel): void {
    console.log('task-list component, completeTask method', task);
    this.completeTask.emit(task);
  }
}
