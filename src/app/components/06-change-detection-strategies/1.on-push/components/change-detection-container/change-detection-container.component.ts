import { Component } from '@angular/core';

import { DefaultComponent } from '../default/default.component';
import { OnPushComponent } from '../on-push/on-push.component';
import { Person } from './../../models/person.model';

@Component({
  selector: 'app-change-detection-container',
  standalone: true,
  templateUrl: './change-detection-container.component.html',
  styleUrl: './change-detection-container.component.css',
  imports: [OnPushComponent, DefaultComponent]
})
export class ChangeDetectionContainerComponent {
  person1: Person = new Person('Anna', 'Ivanova');
  person2: Person = new Person('Boris', 'Petrov');
}
