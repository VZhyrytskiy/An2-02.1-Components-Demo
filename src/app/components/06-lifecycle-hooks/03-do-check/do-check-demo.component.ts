import { Component, OnInit } from '@angular/core';
import { IItem } from './do-check-item/iitem.interface';

@Component({
  selector: 'app-do-check-demo',
  template: `
    <section>
      <h4>One Item:</h4>
      <app-do-check-item
        [item]="tasks[0]"
        (setPriority)="onSetPriority($event)"
        (completeAction)="onCompleteAction($event)"
        (clearAction)="onClearAction($event)"
      ></app-do-check-item>

      <h4>List of Items:</h4>
      <app-do-check-item-list
        [tasks]="tasks"
        (remove)="onRemoveTask($event)"
        (setPriority)="onSetPriority($event)"
        (completeAction)="onCompleteAction($event)"
        (clearAction)="onClearAction($event)"
      >
      </app-do-check-item-list>
      <button (click)="onAddTask()">Add</button>
    </section>
  `
})
export class DoCheckDemoComponent implements OnInit {
  tasks: Array<any> = [];
  responsibles: string[];
  actions: string[];

  ngOnInit() {
    this.responsibles = ['Andrey', 'Boris', 'Helen', 'Joe'];
    this.actions = ['Estimate', 'Create', 'Delete', 'Implement', 'Deploy'];
    this.onAddTask();
  }

  onSetPriority(item: IItem) {
    const index = this.tasks.indexOf(item);
    this.tasks[index].priority = true;
  }

  onCompleteAction(item: IItem) {
    const index = this.tasks.indexOf(item);
    this.tasks[index].done = true;
  }

  onClearAction(item: IItem) {
    console.log(item);
    const index = this.tasks.indexOf(item);
    delete this.tasks[index].action;
  }

  onAddTask(): void {
    this.tasks.push({
      responsible: this.getRendomItem(this.responsibles),
      action: this.getRendomItem(this.actions),
      done: false
    });
  }

  onRemoveTask(task: any): void {
    const pos = this.tasks.indexOf(task);
    this.tasks.splice(pos, 1);
  }

  private getRendomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  private getRendomItem(array: string[]): string {
    const pos: number = this.getRendomInt(array.length - 1);
    return array[pos];
  }
}
