import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { ListService } from './list.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent],
  providers: [ListService],
  exports: [ListComponent]
})
export class ListModule { }
