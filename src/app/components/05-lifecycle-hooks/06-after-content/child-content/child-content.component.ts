import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-content',
  standalone: true,
  templateUrl: './child-content.component.html',
  styleUrl: './child-content.component.css',
  imports: [FormsModule, ChildContentComponent]
})
export class ChildContentComponent {
  firstName = 'Vitaliy';
}
