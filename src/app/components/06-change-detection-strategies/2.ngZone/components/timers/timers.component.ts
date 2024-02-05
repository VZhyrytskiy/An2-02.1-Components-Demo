import { AfterViewChecked, Component } from '@angular/core';
import { CanvasOptimizedComponent } from '../canvas-optimized/canvas-optimized.component';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'app-timers',
  standalone: true,
  templateUrl: './timers.component.html',
  styleUrl: './timers.component.css',
  imports: [CanvasComponent, CanvasOptimizedComponent]
})
export class TimersComponent implements AfterViewChecked {
  inZone = true;

  ngAfterViewChecked() {
    console.log('Change detection triggered!');
  }

  setZone(inZone: boolean) {
    this.inZone = inZone;
  }
}
