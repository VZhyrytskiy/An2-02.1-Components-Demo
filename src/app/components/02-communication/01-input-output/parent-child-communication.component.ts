import { Component, OnInit } from '@angular/core';

import { Task } from './models/task.model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-parent-child-communication',
  templateUrl: './parent-child-communication.component.html'
})
export class ParentChildCommunicationComponent implements OnInit {
  tasks: Array<Task>;

  constructor(public tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

  onCompleteTask(task: Task): void {
    console.log('onCompleteTask method', task);
    task.done = true;
  }

  onAddTask(task: Task): void {
    console.log('onAddTask method', task);
    this.tasks.push(task);
  }
}
