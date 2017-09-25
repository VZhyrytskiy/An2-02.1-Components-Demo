import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UnlessComponent } from './custom-structural-directive/unless.component';
import { UnlessDirective } from './custom-structural-directive/unless.directive';
import { VIfDirective } from './custom-structural-directive/v-if/v-if.directive';
import { VIfDemoComponent } from './custom-structural-directive/v-if/v-if-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UnlessDirective, UnlessComponent, VIfDirective, VIfDemoComponent],
  exports: [UnlessDirective, UnlessComponent, VIfDemoComponent]
})
export class DirectivesModule { }
