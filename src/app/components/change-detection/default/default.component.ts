import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Person } from './../person.model';

@Component({
  selector: 'app-default',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  @Input() person: Person;
}
