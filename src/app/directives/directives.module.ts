import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnlessComponent } from './custom-structural-directive/unless.component';
import { UnlessDirective } from './custom-structural-directive/unless.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UnlessDirective, UnlessComponent],
  exports: [UnlessDirective, UnlessComponent]
})
export class DirectivesModule { }
