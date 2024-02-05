import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-view',
  standalone: true,
  templateUrl: './child-view.component.html',
  styleUrl: './child-view.component.css',
  imports: [FormsModule]
})
export class ChildViewComponent {
  firstName = 'Vitaliy';
}
