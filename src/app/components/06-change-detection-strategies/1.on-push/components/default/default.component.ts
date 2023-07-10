import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import type { Person } from './../../models/person.model';

@Component({
  selector: 'app-default',
  standalone: true,
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [FormsModule, DatePipe]
})
export class DefaultComponent {
  @Input() person!: Person;
}
