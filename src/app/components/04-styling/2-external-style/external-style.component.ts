import { Component } from '@angular/core';

@Component({
  selector: 'app-external-style',
  standalone: true,
  templateUrl: './external-style.component.html',
  // for external styles, we need to use styleUrls: [] or styleUrl: ''
  styleUrl: './external-style.component.css',
})
export class ExternalStyleComponent {}
