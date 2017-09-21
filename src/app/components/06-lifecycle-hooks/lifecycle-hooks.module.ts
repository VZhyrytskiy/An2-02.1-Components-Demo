import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnInitOnDestroyComponent, OnInitOnDestroyDemoComponent } from './01-on-init-on-destroy';
import { OnChangesComponent, OnChangesDemoComponent } from './02-on-changes';
import { DoCheckItemComponent, DoCheckItemListComponent, DoCheckDemoComponent } from './03-do-check';
import { AftersComponent } from './04-afters';

import { ChildViewComponent, AfterViewComponent } from './05-after-view';

import { ChildContentComponent, AfterContentComponent } from './06-after-content';

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
