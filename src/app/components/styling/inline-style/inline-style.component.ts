import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styles: [`
    section {
      width: 25%;
      margin: 25px auto;
    }
    .highlight {
      border: 2px solid red;
      background-color: yellow;
      text-align: center;
      margin-bottom: 20px;
    }
  `]
})
export class InlineStyleComponent {
}
