import { Injectable } from '@angular/core';

import { Task } from './../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTask(): Task {
    return new Task(1, 'Create', 1, 8, 0, false);
  }

  getTasks(): Array<Task> {
    return [
      new Task(1, 'Estimate', 1, 8, 8, true),
      new Task(2, 'Create', 2, 8, 4, false),
      new Task(3, 'Deploy', 3, 8, 0, false)
    ];
  }

}
