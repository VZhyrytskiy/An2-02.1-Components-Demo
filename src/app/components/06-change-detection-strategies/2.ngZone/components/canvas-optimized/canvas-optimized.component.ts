import { Component, ElementRef, AfterViewInit, ViewChild, NgZone } from '@angular/core';
import { Color } from '../../interfaces/color.interface';



@Component({
  selector: 'app-canvas-optimized',
  standalone: true,
  templateUrl: './canvas-optimized.component.html',
  styleUrl: './canvas-optimized.component.css'
})
export class CanvasOptimizedComponent implements AfterViewInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  private interval!: number;
  private color: Color = {
    r: 255,
    g: 0,
    b: 0,
  };
  private stagePhase = 0;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    // Angular dosn't run change detection on every 10 ms
    this.ngZone.runOutsideAngular(() => {
      this.interval = window.setInterval(() => {
        this.setNextColor()
        this.paint();
      }, 10)
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private setNextColor() {
    switch (this.stagePhase) {
      case 0:
        this.color.g++;
        if (this.color.g === 255) this.stagePhase++;
        break;
      case 1:
        this.color.r--;
        if (this.color.r === 0) this.stagePhase++;
        break;
      case 2:
        this.color.b++;
        if (this.color.b === 255) this.stagePhase++;
        break;
      case 3:
        this.color.g--;
        if (this.color.g === 0) this.stagePhase++;
        break;
      case 4:
        this.color.r++;
        if (this.color.r === 255) this.stagePhase++;
        break;
      case 5:
        this.color.b--;
        if (this.color.b === 0) this.stagePhase = 0;
        break;
    }
  }

  private paint() {
    const el = this.canvas.nativeElement;
    var ctx = el.getContext('2d');
    ctx!.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
    ctx!.fillRect(0, 0, el.width, el.height);
  }



}
