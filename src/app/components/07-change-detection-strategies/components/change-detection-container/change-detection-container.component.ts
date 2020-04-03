import { Component } from '@angular/core';

import { Person } from './../../models/person.model';

@Component({
  selector: 'app-change-detection-container',
  templateUrl: './change-detection-container.component.html',
  styleUrls: ['./change-detection-container.component.css']
})
export class ChangeDetectionContainerComponent {
  person1: Person = new Person('Anna', 'Ivanova');
  person2: Person = new Person('Boris', 'Petrov');
}
