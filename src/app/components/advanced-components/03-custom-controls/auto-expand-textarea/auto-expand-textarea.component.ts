import { Component, ViewChild, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-auto-expand-textarea',
  providers: [
    /**
     * We need to use forwardRef because in ES6 classes are not hoisted to the top,
     * so at this point (inside the metadata definition), the class is not yet defined.
     *
     * multi: true indicates that several elements of NG_VALUE_ACCESSOR can be bound to this provider.
     *
     * At runtime, Angular calls all the elements that bound to this token
     * and uses them to bind the model to the respective element.
     */
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AutoExpandTextareaComponent), multi: true }
  ],
  template: `
    <div contenteditable="true"
         #textarea
         tabindex="1"
         role="textarea"
         (input)="change($event)"></div>
  `,
  styles: [`
    div {
          width: 200px;
          min-height: 50px;
          border: 1px solid lightgray;
    }

    div.disabled {
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    }
  `]
})
export class AutoExpandTextareaComponent implements ControlValueAccessor {
  @ViewChild('textarea') textarea;
  onChange: any;
  onTouched: any;

  constructor(
    private renderer: Renderer2
  ) { }

  /**
   * Write a new value to the element. (model -> view)
   * Angular will call this method with the value in one of the following cases:
   * 1. When you instantiate a new FormControl
   * 2. When you call this.control.patchValue/setValue(value)
   */
  writeValue(value: any): void {
    const div = this.textarea.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }
  /**
   * Set the function to be called when the control receives a change event.
   * Angular provides you with a function and asks you to call it whenever there is a change in your component
   * with the new value so that it can update the control.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * The registerOnTouched method is the same as registerOnChange
   * except that you should call her when the control receives a touch event.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   * Angular will call this method in one of the following cases:
   * 1. When you instantiate a new FormControl with the disabled property set to true.
   * FormControl({value: '', disabled: true})
   * 2. When you call control.disable() or when you call control.enable()
   * after your already called control.disable() at least once.
   * @param isDisabled
   */
  setDisabledState(isDisabled: boolean): void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

  change($event) {
    this.onChange($event.target.textXontent);
    this.onTouched($event.target.textContent);
  }

}
