import { Component } from '@angular/core';

@Component({
  selector: 'app-svg',
  standalone: true,
  templateUrl: './svg.component.svg', // or .html
  styleUrls: ['./svg.component.css']
})
export class SvgComponent  {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}
