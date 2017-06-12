import { Component, OnInit, OnDestroy, DoCheck, OnChanges, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-afters',
  templateUrl: 'afters.component.html',
  styleUrls: ['afters.component.css']
})
export class AftersComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked {
  counter: number;

  constructor() {
    console.log('[Constructor]');
      this.counter = 1;
  }

  increment(): void {
    console.log('[Increment]')
    this.counter++;
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnChanges(): void {
    console.log('OnChanges');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

}
