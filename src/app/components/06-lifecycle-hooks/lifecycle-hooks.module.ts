import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnInitOnDestroyComponent } from './01-on-init-on-destroy';
import { OnChangesComponent } from './02-on-changes';
import { DoCheckItemComponent } from './03-do-check-item';
import { DoCheckItemListComponent } from './04-do-check-item-list';
import { AftersComponent } from './05-afters';

import { AfterViewComponent } from './06-after-view';
import { ChildViewComponent } from './06-after-view/child-view';

import { AfterContentComponent } from './07-after-content';
import { ChildContentComponent } from './07-after-content/child-content';


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
