import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';

import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('input') inputField: ElementRef<HTMLInputElement>;
  @ViewChild('child') childComp: ElementRef<ChildComponent>;
  @ViewChild(ChildComponent) child: ChildComponent;

  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  constructor() {}

  ngAfterViewInit() {
    this.inputField.nativeElement.value = 'Value From Parent';
    this.child.onClick();

    console.log(this.childComp);
    console.log(this.children);
    this.children.last.onClick();
  }
}
