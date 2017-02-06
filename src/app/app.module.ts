import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { TasksModule } from './components/tasks/tasks.module';
import { ProjectionModule } from './components/projection/projection.module';
import { StylingModule } from './components/styling/styling.module';
import { LifecycleHooksModule } from './components/lifecycle-hooks/lifecycle-hooks.module';
import { HostDemoComponent } from './components/host/host-demo/host-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HostDemoComponent
  ],
  imports: [
    BrowserModule,
    TasksModule,
    ProjectionModule,
    StylingModule,
    LifecycleHooksModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA /* or NO_ERRORS_SCHEMA  */ ]
})
export class AppModule { }
