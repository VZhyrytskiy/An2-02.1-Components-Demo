import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { ListModule } from './components/01-display-data/list.module';
import { CommunicationModule } from './components/02-communication/communication.module';
import { HostModule } from './components/03-host/host.module';
import { ProjectionModule } from './components/04-projection/projection.module';
import { StylingModule } from './components/05-styling/styling.module';
import { LifecycleHooksModule } from './components/06-lifecycle-hooks/lifecycle-hooks.module';
import { DynamicComponentLoadingModule } from './components/07-dynamic-component-loading/dynamic-component-loading.module';
import { ChangeDetectionModule } from './components/08-change-detection-strategies/change-detection-strategies.module';

import { DirectivesModule } from './directives/directives.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListModule,
    CommunicationModule,
    HostModule,
    ProjectionModule,
    StylingModule,
    LifecycleHooksModule,
    ChangeDetectionModule,
    DirectivesModule,
    DynamicComponentLoadingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA /* or NO_ERRORS_SCHEMA  */ ]
})
export class AppModule { }
