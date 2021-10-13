import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[only-number]'
})
export class OnlyNumberDirective {
  @Input() config: { color: string; } = { color: 'red' };

  input!: HTMLInputElement;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  @HostListener('keyup', ['$event.key'])
  onKeyUp(char: string): void {
    // convert key to number and check whether it is NaN
    if (Number.isNaN(Number(char))) {
      this.input.value = this.input.value.slice(0, this.input.value.length-1);
      this.input.style.backgroundColor = this.config.color;
    } else {
      this.input.style.backgroundColor = 'unset';
    }

  }
}
