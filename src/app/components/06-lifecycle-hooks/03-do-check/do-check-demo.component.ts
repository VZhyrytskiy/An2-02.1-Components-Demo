import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check-demo',
  template: `
    <section>
      <app-do-check-item [item]="item"></app-do-check-item>
      <app-do-check-item-list
        [tasks]="tasks"
        (onRemove)="removeTask($event)">
      </app-do-check-item-list>
      <button (click)="addTask()">Add</button>
    </section>
  `
})
export class DoCheckDemoComponent implements OnInit {
  item = {
    action: 'Learn Angular 2',
    responsible: 'Vitaliy',
    done: false
  };

  tasks: Array<any> = [];
  responsibles: string[];
  actions: string[];

  ngOnInit() {
    this.responsibles = ['Andrey', 'Boris', 'Helen', 'Joe'];
    this.actions = ['Estimate', 'Create', 'Delete', 'Implement', 'Deploy'];
    this.addTask();
  }

  addTask(): void {
    this.tasks.push({
        responsible: this.getRendomItem(this.responsibles),
        action: this.getRendomItem(this.actions),
        done: false
    });
  }

  removeTask(task: any): void {
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
