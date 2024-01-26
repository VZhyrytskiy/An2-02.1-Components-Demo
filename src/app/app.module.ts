import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { AppComponent } from './app.component';
import * as comp from './components';
import * as dirs from './directives';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    /* Display Data */
    comp.ListComponent,
    comp.SvgComponent,

    /* Communication */
    comp.ParentChildCommunicationComponent,
    comp.ClickStopComponent,
    comp.ParentComponent,
    comp.ExportAsDemoComponent,
    comp.SiblingContainerComponent,
    comp.SiblingContainer2Component,
    comp.SiblingContainer3Component,
    comp.TheSameComponent,
    comp.TheSameDirective,
    comp.AccountComponent,
    comp.GetPropsDirective,

    /* Projection */
    comp.MessageComponent,
    comp.Panel1Component,
    comp.Panel2Component,
    comp.Panel3Component,
    comp.CardComponent,

    /* Styling */
    comp.InlineStyleComponent,
    comp.ExternalStyleComponent,
    comp.HostContextSelectorComponent,
    comp.HostSelectorComponent,
    comp.NoEncapsulationComponent,
    comp.ShadowDomEncapsulationComponent,

    /* Lifecycle Hooks */
    comp.OnInitOnDestroyDemoComponent,
    comp.OnChangesDemoComponent,
    comp.DoCheckDemoComponent,
    comp.AftersComponent,
    comp.AfterViewComponent,
    comp.AfterContentComponent,
    comp.ChildContentComponent,

    /* ChangeDetection Strategies */
    comp.ChangeDetectionContainerComponent,
    comp.TimersComponent,
    comp.ChechOnceChangedComponent,

    /* Dynamic Components */
    comp.ContainerComponent,
    comp.DynamicComponentDemo1Component,
    comp.TabContainerComponent,

    // /* Attribute directives */
    dirs.HostComponent,
    dirs.HostDirective,
    dirs.OnlyNumberComponent,
    dirs.UnderlineComponent,

    /** Directive Composition API */
    dirs.HostCompositionComponent,
    dirs.ZooComponent,
    dirs.ColorComponent,
    dirs.CustomNgIfComponent,

    // // /* Structural directives */
    dirs.CustomIfDirective,
    dirs.CustomForDirective,
    dirs.CarouselDirective,

  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
