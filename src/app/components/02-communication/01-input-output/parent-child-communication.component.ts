import { Component, type OnInit } from '@angular/core';

import { type TaskModel } from './models/task.model';
import { TasksService } from './services/tasks.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-parent-child-communication',
  standalone: true,
  templateUrl: './parent-child-communication.component.html',
  imports: [TaskListComponent, TaskFormComponent]
})
export class ParentChildCommunicationComponent implements OnInit {
  tasks!: Array<TaskModel>;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
  }

  onCompleteTask(task: TaskModel): void {
    console.log('onCompleteTask method', task);
    task.done = true;
  }

  onAddTask(task: TaskModel): void {
    console.log('onAddTask method', task);
    this.tasks.push(task);
  }
}
