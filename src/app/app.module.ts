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
import { ChangeDetectionModule } from './components/06-change-detection-strategies/1.on-push/change-detection-strategies.module';
import { DynamicComponentLoadingModule } from './components/07-dynamic-component/dynamic-component-loading.module';
import { LifecycleHooksModule } from './components/05-lifecycle-hooks/lifecycle-hooks.module';
import { DirectivesModule } from './directives/directives.module';
import { TimersModule } from './components/06-change-detection-strategies/2.ngZone/timers/timers.module';

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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,

    ChangeDetectionModule,
    TimersModule,
    DynamicComponentLoadingModule,
    LifecycleHooksModule,
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
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
