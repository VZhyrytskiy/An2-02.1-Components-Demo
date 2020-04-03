import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-afters',
  templateUrl: './afters.component.html',
  styleUrls: ['./afters.component.css']
})
export class AftersComponent
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input() counter = 1;

  constructor() {
    console.log('[Constructor]');
  }

  onIncrement(): void {
    console.log('[OnIncrement]');
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
