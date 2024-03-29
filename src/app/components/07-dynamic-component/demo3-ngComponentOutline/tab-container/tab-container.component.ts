import { Component, InjectionToken, Injector, inject, type OnInit } from '@angular/core';
import { Tab1Component } from '../components/tab1/tab1.component';
import { Tab2Component } from '../components/tab2/tab2.component';
import { DynamicService } from '../dynamic.service';
import { NgClass, NgComponentOutlet, NgForOf } from '@angular/common';

export const token = new InjectionToken<string>('');

@Component({
  selector: 'app-tab-container',
  standalone: true,
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.css',
  imports: [NgClass, NgComponentOutlet],
})
export class TabContainerComponent implements OnInit {
  private injector = inject(Injector);
  private dynamicService = inject(DynamicService);

  // tabs info
  tabs = [
    {
      label: 'Tab1',
      component: Tab1Component,
      data: 'This is the first Tab',
      isActive: true,
    },
    {
      label: 'Tab2',
      component: Tab2Component,
      data: 'This is the second tab',
      isActive: false,
    },
  ];

  activeComponent: any;
  activeComponentData: string = '';
  receivedData!: string;
  myInjector!: Injector;

  ngOnInit(): void {
    // get data from children components (Tabs)
    this.dynamicService.getObservable().subscribe((data) => {
      this.receivedData = data;
    });

    const defaultTabIndex = this.tabs.findIndex((t) => t.isActive === true);
    const defaultTab = this.tabs[defaultTabIndex];
    this.onTabClick(defaultTab.component, defaultTab.data, defaultTabIndex);
  }

  onTabClick(tabComponent: any, tabData: string, tabIndex: number): void {
    // The purpose of a setTimeout() is to avoid the ExpressionChangedAfterChecked errors.
    setTimeout(() => {
      this.setActiveTab(tabIndex);
      this.receivedData = '';
      this.activeComponent = tabComponent;
      this.activeComponentData = tabData;
      this.createInjector();
    }, 0);
  }

  private createInjector(): void {
    this.myInjector = Injector.create({
      providers: [{ provide: token, useValue: this.activeComponentData }],
      parent: this.injector,
    });
  }

  private setActiveTab(tabInd: number): void {
    this.tabs.forEach((tab, tabIndex) => {
      tab.isActive = tabIndex === tabInd;
    });
  }
}
