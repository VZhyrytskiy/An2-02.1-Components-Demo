import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Person } from '../../models/person.model';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {
  @Input() person: Person;
}
