import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineStyleComponent } from './inline-style';
import { ExternalStyleComponent } from './external-style';
import { NativeEncapsulationComponent } from './native-encapsulation';
import { NoEncapsulationComponent } from './no-encapsulation';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent
  ],
  exports: [
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent
  ]
})
export class StylingModule { }
