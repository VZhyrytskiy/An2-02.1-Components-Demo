import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-ng-for',
  standalone: true,
  templateUrl: './child-ng-for.component.html',
  styleUrl: './child-ng-for.component.css'
})
export class ChildNgForComponent {
  @Input({ required: true }) i!: number;
}
