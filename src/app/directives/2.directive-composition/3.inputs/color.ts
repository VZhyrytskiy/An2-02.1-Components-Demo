import { Component, Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
  standalone: true,
})
export class ColorDirective implements OnInit {
  private el = inject(ElementRef);

  @Input() color: string = 'red';

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.color;
  }
}

@Component({
  selector: 'app-color-p',
  standalone: true,
  template: '<p>One day I went to the zoo to look at the animals.</p>',
  hostDirectives: [
    {
      directive: ColorDirective,
      // to pass data to the directive input use the inputs property
      inputs: ['color'],
      // outputs: [...]
    },
  ],
})
export class ColorComponent {}
