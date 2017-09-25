import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VIfDirective } from './custom-structural-directive/v-if/v-if.directive';
import { VIfDemoComponent } from './custom-structural-directive/v-if/v-if-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ VIfDirective, VIfDemoComponent],
  exports: [VIfDemoComponent]
})
export class DirectivesModule { }
