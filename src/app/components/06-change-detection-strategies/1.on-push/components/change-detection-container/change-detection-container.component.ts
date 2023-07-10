import { Component } from '@angular/core';

import { Person } from './../../models/person.model';
import { OnPushComponent } from '../on-push/on-push.component';
import { DefaultComponent } from '../default/default.component';

@Component({
  selector: 'app-change-detection-container',
  standalone: true,
  templateUrl: './change-detection-container.component.html',
  styleUrls: ['./change-detection-container.component.css'],
  imports: [OnPushComponent, DefaultComponent]
})
export class ChangeDetectionContainerComponent {
  person1: Person = new Person('Anna', 'Ivanova');
  person2: Person = new Person('Boris', 'Petrov');
}
