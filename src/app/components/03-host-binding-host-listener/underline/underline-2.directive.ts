import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[underline2]'
})
export class Underline2Directive {

  // use HostBinding to bind host property to directive property
  @HostBinding('style.textDecoration') textDecoration!: string;

  @HostListener('mouseenter', )
  onMouseEnter(): void {
    this.textDecoration = 'underline';
  }

  @HostListener('mouseleave')
  onMouseLeave(target: HTMLElement): void {
    this.textDecoration = 'none';
  }

}
