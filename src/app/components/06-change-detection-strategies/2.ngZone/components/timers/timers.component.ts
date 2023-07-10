import { AfterViewChecked, Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CanvasComponent } from '../canvas/canvas.component';
import { CanvasOptimizedComponent } from '../canvas-optimized/canvas-optimized.component';

@Component({
  selector: 'app-timers',
  standalone: true,
  templateUrl: './timers.component.html',
  styleUrls: ['./timers.component.css'],
  imports: [NgIf, CanvasComponent, CanvasOptimizedComponent]
})
export class TimersComponent implements AfterViewChecked {
  public inZone = true;

  ngAfterViewChecked() {
    console.log('Change detection triggered!');
  }

  setZone(inZone: boolean) {
    this.inZone = inZone;
  }
}
