import { Directive, type OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTheSame]',
  standalone: true
})
export class TheSameDirective implements OnInit {
  @Input({ required: true, alias: 'appTheSame'})
  input!: string;

  ngOnInit(): void {
    console.log(`Directive: ${this.input}`);
  }
}
