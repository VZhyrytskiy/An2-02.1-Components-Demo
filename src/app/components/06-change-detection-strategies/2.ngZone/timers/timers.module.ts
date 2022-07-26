import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent as TimersComponent, CanvasComponent, CanvasOptimizedComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TimersComponent, CanvasComponent, CanvasOptimizedComponent],
  exports: [TimersComponent]
})
export class TimersModule { }
