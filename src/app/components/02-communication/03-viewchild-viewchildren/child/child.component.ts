import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log(`From Child Component`);
  }

  onClick() {
    console.log('Click method from child, called in Parent component');
  }
}
