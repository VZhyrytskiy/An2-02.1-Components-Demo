import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Person } from './../person.model';

@Component({
  selector: 'app-on-push',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css']
})
export class OnPushComponent {
  @Input() person: Person;
}
