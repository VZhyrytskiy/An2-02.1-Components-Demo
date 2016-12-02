import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list';
import { TaskFormComponent } from './task-form';
import { TaskComponent } from './task-list/task';

import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskFormComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TasksService
  ],
  exports: [
    TaskListComponent,
    TaskFormComponent
  ]
})
export class TasksModule { }
