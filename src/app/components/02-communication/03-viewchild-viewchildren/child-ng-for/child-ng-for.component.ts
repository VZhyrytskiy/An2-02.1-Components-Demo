import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-ng-for',
  templateUrl: './child-ng-for.component.html',
  styleUrls: ['./child-ng-for.component.css']
})
export class ChildNgForComponent {
  @Input() i!: number;
}
