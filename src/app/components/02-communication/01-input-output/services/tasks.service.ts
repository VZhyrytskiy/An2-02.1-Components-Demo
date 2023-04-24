import { Injectable } from '@angular/core';

import { TaskModel } from './../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  getTask(): TaskModel {
    return new TaskModel(1, 'Create', 1, 8, 0, false);
  }

  getTasks(): Array<TaskModel> {
    return [
      new TaskModel(1, 'Estimate', 1, 8, 8, true),
      new TaskModel(2, 'Create', 2, 8, 4, false),
      new TaskModel(3, 'Deploy', 3, 8, 0, false)
    ];
  }

}
