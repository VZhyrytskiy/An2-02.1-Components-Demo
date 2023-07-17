import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true
})
export class BoldDirective {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.fontWeight = '900';
  }
}

@Directive({
  standalone: true
})
export class ItalicDirective {

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.fontStyle = "italic";
  }
}


@Directive({
  standalone: true,
  hostDirectives: [BoldDirective, ItalicDirective]
})
export class BoldItalicDirective {
}
