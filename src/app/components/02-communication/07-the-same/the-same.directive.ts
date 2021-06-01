import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTheSame]'
})
export class TheSameDirective implements OnInit {

  @Input('appTheSame')
  input!: string;

  ngOnInit(): void {
    console.log(`Directive: ${this.input}`);
  }
}
