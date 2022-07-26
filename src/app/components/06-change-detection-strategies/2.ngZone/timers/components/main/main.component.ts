import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-timers',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewChecked {
  public inZone = true;

  ngAfterViewChecked() {
    console.log('Change detection triggered!');
  }

  setZone(inZone: boolean) {
    this.inZone = inZone;
  }
}
