import { Component, ElementRef, AfterViewInit, ViewChild, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { Color } from '../../interfaces/color.interface';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  private interval!: number;
  private color: Color = {
    r: 255,
    g: 0,
    b: 0,
  };
  private stagePhase = 0;

  ngAfterViewInit() {
    // Angular runs change detection on every 10ms
    this.interval = window.setInterval(() => {
      this.setNextColor()
      this.paint();
    }, 10);
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
    const ctx = el.getContext('2d');
    ctx!.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
    ctx!.fillRect(0, 0, el.width, el.height);
  }



}
