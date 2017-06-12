import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from './../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: 'task-form.component.html',
  styleUrls: ['task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() addTask: EventEmitter<Task>;
  value: string;

  constructor() {
    this.addTask = new EventEmitter<Task>();
  }

  ngOnInit() {
  }

  onAddTask(newTask: {action: string, priority: number, estHours: number}): void {
    let task = new Task(null,
      newTask.action,
      newTask.priority,
      newTask.estHours
    );

    this.addTask.emit(task);
    console.log('add task method', task);
  }

  // With the $event object we get access to event details every time
  // the keyup event is triggered.
  onKey(event: KeyboardEvent): void {
    // We’re using a strong typed approach
    // We’re casting the event target object, which is available in the
    // target property of the event object, to an HTMLInputElement first.
    // Now we’re able to access the value property of the input element
    // which gives us the string which was entered.
    this.value = (<HTMLInputElement>event.target).value;
  }
}
