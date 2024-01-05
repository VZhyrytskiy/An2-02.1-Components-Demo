import { Directive, ElementRef, OnInit, inject } from '@angular/core';

// First specific directive: add bold style
@Directive({
  standalone: true,
})
export class BoldDirective implements OnInit {
  private el = inject(ElementRef);

  ngOnInit(): void {
    this.el.nativeElement.style.fontWeight = '900';
  }
}

// Second specific directive: add italic style
@Directive({
  standalone: true,
})
export class ItalicDirective implements OnInit {
  private el = inject(ElementRef);

  ngOnInit(): void {
    this.el.nativeElement.style.fontStyle = 'italic';
  }
}


// Combine two specific directives into one: add bold and italic style
@Directive({
  standalone: true,
  hostDirectives: [BoldDirective, ItalicDirective]
})
export class BoldItalicDirective {
}
