import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnInitOnDestroyComponent, OnInitOnDestroyDemoComponent } from './01-on-init-on-destroy';
import { OnChangesComponent, OnChangesDemoComponent } from './02-on-changes';
import { DoCheckItemComponent, DoCheckItemListComponent, DoCheckDemoComponent } from './03-do-check';
import {  } from './04-do-check-item-list';
import { AftersComponent } from './05-afters';

import { AfterViewComponent } from './06-after-view';
import { ChildViewComponent } from './06-after-view/child-view';

import { AfterContentComponent } from './07-after-content';
import { ChildContentComponent } from './07-after-content/child-content';
import {  } from './03-do-check/src/app/components/06-lifecycle-hooks/03-do-check/do-check-demo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OnInitOnDestroyComponent,
    OnInitOnDestroyDemoComponent,
    OnChangesComponent,
    OnChangesDemoComponent,
    DoCheckItemComponent,
    DoCheckItemListComponent,
    DoCheckDemoComponent,
    AftersComponent,
    AfterViewComponent,
    ChildViewComponent,
    AfterContentComponent,
    ChildContentComponent,
    OnChangesDemoComponent,
  ],
  exports: [
    OnInitOnDestroyDemoComponent,
    OnChangesDemoComponent,
    DoCheckDemoComponent,
    AftersComponent,
    AfterViewComponent,
    AfterContentComponent,
    ChildContentComponent
  ]
})
export class LifecycleHooksModule { }
