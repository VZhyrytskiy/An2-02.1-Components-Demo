import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[underline2]',
  standalone: true
})
export class Underline2Directive {

  // use HostBinding to bind host property to directive property
  @HostBinding('style.textDecoration') textDecoration!: string;

  @HostListener('mouseenter', )
  onMouseEnter(): void {
    this.textDecoration = 'underline';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.textDecoration = 'none';
  }

}
