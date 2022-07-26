import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import type { Person } from './../../models/person.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultComponent {
  @Input() person!: Person;
}
