import { Directive, ElementRef, Renderer2, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const SPLITTER_VALUE_ACCESSOR =
{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SplitterDirective ), multi: true,};

@Directive({
  selector: '[splitterControl]',
  providers: [ SPLITTER_VALUE_ACCESSOR ]
})
export class SplitterDirective implements ControlValueAccessor {
  onChange;

  constructor( private renderer : Renderer2,
               private element : ElementRef ) {
  }

 @HostListener('input', [ '$event.target.value' ])
  input( value ) {
    this.onChange(value.split(',').filter(Boolean));
  }

  writeValue( value : any ): void {
    const element = this.element.nativeElement;
    this.renderer.setProperty(element, 'value', value.join(','));
  }

  registerOnChange( fn: any ): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {

  }

}
