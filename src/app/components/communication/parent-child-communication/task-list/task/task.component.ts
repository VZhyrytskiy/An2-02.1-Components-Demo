import { Component, EventEmitter, Input, Output, HostBinding, HostListener } from '@angular/core';

import { Task } from './../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task: Task;
    @Output() complete: EventEmitter<Task>;

    @HostBinding('class') class = 'task';

    @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
      // console.log(event.target);
    }

    constructor() {
        this.complete = new EventEmitter<Task>();
    }

    completeTask(event: any): void {
        console.log('task component, completeTask method:', this.task);
        this.complete.emit(this.task);
    }
}
