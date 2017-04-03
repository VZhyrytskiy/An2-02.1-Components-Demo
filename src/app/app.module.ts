import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { TasksModule } from './components/tasks/tasks.module';
import { ProjectionModule } from './components/projection/projection.module';
import { StylingModule } from './components/styling/styling.module';
import { LifecycleHooksModule } from './components/lifecycle-hooks/lifecycle-hooks.module';
import { ViewchildModule } from './components/viewchild/viewchild.module';
import { CommunicationModule } from './components/communication/communication.module';
import { ChangeDetectionModule } from './components/change-detection/change-detection.module';
import { DynamicComponentLoadingModule } from './components/dynamic-component-loading/dynamic-component-loading.module';

import { DirectivesModule } from './directives/directives.module';


import { HostDemoComponent } from './components/host/host-demo/host-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HostDemoComponent,
  ],
  imports: [
    BrowserModule,
    TasksModule,
    ProjectionModule,
    StylingModule,
    LifecycleHooksModule,
    ViewchildModule,
    CommunicationModule,
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
