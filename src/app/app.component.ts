import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  item: any = { action: 'Learn Angular 2', responsible: 'Vitaliy', done: false};

  // DoCheckItemListComponent Demo
  tasks: Array<any> = [];
  responsibles: string[];
  actions: string[];

  // OnChangesComponent Demo
  // responsible: string;
  // action: string;

  // setValues(actionField: HTMLInputElement, responsibleField: HTMLInputElement): void {
  //     this.responsible = responsibleField.value;
  //     this.action = actionField.value;
  // }

  // DoCheckItemComponent Demo


  ngOnInit() {
    this.responsibles = ['Andrey', 'Boris', 'Helen', 'Joe'];
    this.actions = ['Estimate', 'Create', 'Delete', 'Implement', 'Deploy'];
    this.addTask();
  }

  getRendomInt(max: number): number {
      return Math.floor(Math.random() * (max + 1));
  }

  getRendomItem(array: string[]): string {
      let pos: number = this.getRendomInt(array.length - 1);
      return array[pos];
  }

  addTask(): void {
      this.tasks.push({
          responsible: this.getRendomItem(this.responsibles),
          action: this.getRendomItem(this.actions),
          done: false
      });
  }

  removeTask(task: any): void {
      let pos = this.tasks.indexOf(task);
      this.tasks.splice(pos, 1);
  }





}
