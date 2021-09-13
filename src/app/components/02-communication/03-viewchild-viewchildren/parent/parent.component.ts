import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewChecked
} from '@angular/core';
import { ChildNgForComponent } from '../child-ng-for/child-ng-for.component';

import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewChecked {
  @ViewChild('input')
  inputField!: ElementRef<HTMLInputElement>;

  @ViewChild('child')
  childComp!: ElementRef<ChildComponent>;

  @ViewChild(ChildComponent)
  child!: ChildComponent;

  @ViewChildren(ChildComponent)
  children!: QueryList<ChildComponent>;

  data = [1, 2, 3];

  @ViewChild(ChildNgForComponent)
  childNgFor!: ChildNgForComponent;

  @ViewChildren(ChildNgForComponent)
  childrenNgFor!: QueryList<ChildComponent>;

  constructor() {}

  ngAfterViewChecked(): void {
    this.inputField.nativeElement.value = 'Value From Parent';
    this.child.onClick();

    console.log(this.childComp);
    console.log(this.children);
    this.children.last.onClick();

    console.log(this.childNgFor);
    console.log(this.childrenNgFor);
  }

  onChangeData() {
    this.data.unshift(4);
  }
}
