import { Component, OnInit } from '@angular/core';

import { Task } from './components/02-communication/01-parent-child-communication/models/task.model';
import { TasksService } from './components/02-communication/01-parent-child-communication/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Task Demo
  task: Task;
  tasks: Array<Task>;

  constructor(
    public tasksService: TasksService
  ) { }

  ngOnInit() {
    this.task = this.tasksService.getTask();
    this.tasks = this.tasksService.getTasks();
  }

  onCompleteTask(task: Task): void {
    console.log('app component, onCompleteTask method', task);
    task.done = true;
  }

  onAddTask(task: Task): void {
    console.log('app component, onAddTask method', task);
    this.tasks.push(task);
  }

  // OnInitOnDestroyComponent Demo
  // display: boolean = true;

  // toggle(): void {
  //   this.display = !this.display;
  // }

  // OnChangesComponent Demo
  // responsible: string;
  // action: string;

  // setValues(actionField: HTMLInputElement, responsibleField: HTMLInputElement): void {
  //     this.responsible = responsibleField.value;
  //     this.action = actionField.value;
  // }

  // DoCheckItemComponent Demo
  // item: any = { action: 'Learn Angular 2', responsible: 'Vitaliy', done: false};

  // DoCheckItemListComponent Demo
  // tasks: Array<any> = [];
  // responsibles: string[];
  // actions: string[];

  // ngOnInit() {
  //   this.responsibles = ['Andrey', 'Boris', 'Helen', 'Joe'];
  //   this.actions = ['Estimate', 'Create', 'Delete', 'Implement', 'Deploy'];
  //   this.addTask();
  // }

  // getRendomInt(max: number): number {
  //     return Math.floor(Math.random() * (max + 1));
  // }

  // getRendomItem(array: string[]): string {
  //     let pos: number = this.getRendomInt(array.length - 1);
  //     return array[pos];
  // }

  // addTask(): void {
  //     this.tasks.push({
  //         responsible: this.getRendomItem(this.responsibles),
  //         action: this.getRendomItem(this.actions),
  //         done: false
  //     });
  // }

  // removeTask(task: any): void {
  //     let pos = this.tasks.indexOf(task);
  //     this.tasks.splice(pos, 1);
  // }





}
