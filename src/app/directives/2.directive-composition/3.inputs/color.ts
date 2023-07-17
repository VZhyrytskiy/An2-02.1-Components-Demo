import { Component, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  standalone: true
})
export class ColorDirective {
  @Input() color: string = 'red';

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.color;
  }
}


@Component({
  selector: 'app-color-p',
  standalone: true,
  template: '<p>One day I went to the zoo to look at the animals.</p>',
  hostDirectives: [{
    directive: ColorDirective,
    inputs: ['color'],
    // outputs: [...]
  }]
})
export class ColorComponent {

}
