import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import type { Person } from './../../models/person.model';

@Component({
  selector: 'app-on-push',
  standalone: true,
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, DatePipe]
})
export class OnPushComponent {
  @Input() person!: Person;
}
