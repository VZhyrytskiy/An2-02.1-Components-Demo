import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnInitOnDestroyComponent } from './on-init-on-destroy';
import { OnChangesComponent } from './on-changes';
import { DoCheckItemComponent } from './do-check-item';
import { DoCheckItemListComponent } from './do-check-item-list';
import { AftersComponent } from './afters';

import { AfterViewComponent } from './after-view';
import { ChildViewComponent } from './after-view/child-view';

import { AfterContentComponent } from './after-content';
import { ChildContentComponent } from './after-content/child-content';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OnInitOnDestroyComponent,
    OnChangesComponent,
    DoCheckItemComponent,
    DoCheckItemListComponent,
    AftersComponent,
    AfterViewComponent,
    ChildViewComponent,
    AfterContentComponent,
    ChildContentComponent,
  ],
  exports: [
    OnInitOnDestroyComponent,
    OnChangesComponent,
    DoCheckItemComponent,
    DoCheckItemListComponent,
    AftersComponent,
    AfterViewComponent,
    AfterContentComponent,
    ChildContentComponent
  ]
})
export class LifecycleHooksModule { }
