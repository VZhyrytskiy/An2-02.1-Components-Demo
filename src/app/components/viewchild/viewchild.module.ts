import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ParentComponent],
  declarations: [ParentComponent, ChildComponent]
})
export class ViewchildModule { }
