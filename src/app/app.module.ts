import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { AppComponent } from './app.component';

/**
 * Modules
 */
import { DirectivesModule } from './directives/directives.module';

import { ListComponent, SvgComponent } from './components/01-display-data';
import {
  ParentChildCommunicationComponent,
  GetPropsDirective,
  AccountComponent,
  TheSameDirective,
  TheSameComponent,
  SiblingContainer2Component,
  SiblingContainerComponent,
  ClickStopComponent,
  ParentComponent,
  ExportAsDemoComponent,
} from './components/02-communication';
import {
  MessageComponent,
  Panel1Component,
  Panel2Component,
  Panel3Component,
  CardComponent,
} from './components/03-projection';
import {
  InlineStyleComponent,
  ExternalStyleComponent,
  HostContextSelectorComponent,
  HostSelectorComponent,
  NoEncapsulationComponent,
  ShadowDomEncapsulationComponent,
} from './components/04-styling';
import {
  OnInitOnDestroyDemoComponent,
  AfterContentComponent,
  AfterViewComponent,
  AftersComponent,
  DoCheckDemoComponent,
  OnChangesDemoComponent,
  ChildContentComponent,
} from './components/05-lifecycle-hooks';
import {
  ChangeDetectionContainerComponent,
  TimersComponent,
} from './components/06-change-detection-strategies';
import {
  ContainerComponent,
  DynamicComponentDemo1Component,
  TabContainerComponent,
} from './components/07-dynamic-component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,

    DirectivesModule,

    // standalone components
    ListComponent,
    SvgComponent,
    ParentChildCommunicationComponent,
    ClickStopComponent,
    ParentComponent,
    ExportAsDemoComponent,
    SiblingContainerComponent,
    SiblingContainer2Component,
    TheSameComponent,
    TheSameDirective,
    AccountComponent,
    GetPropsDirective,
    MessageComponent,
    Panel1Component,
    Panel2Component,
    Panel3Component,
    CardComponent,
    InlineStyleComponent,
    ExternalStyleComponent,
    HostContextSelectorComponent,
    HostSelectorComponent,
    NoEncapsulationComponent,
    ShadowDomEncapsulationComponent,

    /* Lifecycle Hooks */
    OnInitOnDestroyDemoComponent,
    OnChangesDemoComponent,
    DoCheckDemoComponent,
    AftersComponent,
    AfterViewComponent,
    AfterContentComponent,
    ChildContentComponent,

    /* ChangeDetection Strategies */
    ChangeDetectionContainerComponent,
    TimersComponent,

    /* Dynamic Components */
    ContainerComponent,
    DynamicComponentDemo1Component,
    TabContainerComponent,
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
