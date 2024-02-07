import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import {
  ListComponent,
  SvgComponent,
  ParentChildCommunicationComponent,
  ClickStopComponent,
  ParentComponent,
  ExportAsDemoComponent,
  SiblingContainerComponent,
  SiblingContainer3Component,
  SiblingContainer2Component,
  TheSameComponent,
  TheSameDirective,
  AccountComponent,
  GetPropsDirective,
} from './components';
import {
  HostComponent,
  HostDirective,
  UnderlineComponent,
  OnlyNumberComponent,
} from './directives/1.attribute-directives';
import {
  HostCompositionComponent,
  ZooComponent,
  ColorComponent,
  CustomNgIfComponent,
} from './directives/2.directive-composition';
import {
  CustomIfDirective,
  CustomForDirective,
  CarouselDirective,
} from './directives/3.structural-directives';
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
  AfterContentComponent,
  AfterViewComponent,
  AftersComponent,
  ChildContentComponent,
  DoCheckDemoComponent,
  OnChangesDemoComponent,
  OnInitOnDestroyDemoComponent,
} from './components/05-lifecycle-hooks';
import {
  ChangeDetectionContainerComponent,
  TimersComponent,
  ChechOnceChangedComponent
} from './components/06-change-detection-strategies';
import { DynamicComponentDemo1Component, ContainerComponent, TabContainerComponent} from './components/07-dynamic-component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    ListComponent,
    SvgComponent,
    ParentChildCommunicationComponent,
    ClickStopComponent,
    ParentComponent,
    ExportAsDemoComponent,
    SiblingContainerComponent,
    SiblingContainer3Component,
    SiblingContainer2Component,
    TheSameComponent,
    TheSameDirective,
    AccountComponent,
    GetPropsDirective,
    HostComponent,
    HostDirective,
    UnderlineComponent,
    OnlyNumberComponent,
    HostCompositionComponent,
    ZooComponent,
    ColorComponent,
    CustomNgIfComponent,
    CustomIfDirective,
    CustomForDirective,
    CarouselDirective,
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
    AfterContentComponent,
    AfterViewComponent,
    AftersComponent,
    ChildContentComponent,
    DoCheckDemoComponent,
    OnChangesDemoComponent,
    OnInitOnDestroyDemoComponent,
    ChangeDetectionContainerComponent,
    TimersComponent,
    ChechOnceChangedComponent,
    DynamicComponentDemo1Component,
    ContainerComponent,
    TabContainerComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA], //CUSTOM_ELEMENTS_SCHEMA
})
export class AppComponent {
  images = [
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
    '/assets/images/3.jpg',
    '/assets/images/4.jpg',
  ];
}
