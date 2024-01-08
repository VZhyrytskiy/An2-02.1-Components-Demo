import { NgTemplateOutlet } from '@angular/common';
import { type AfterContentInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [NgTemplateOutlet]
})
export class CardComponent implements AfterContentInit {
  @Input({ required: false }) expanded = true;

  @ContentChild('greet') content!: TemplateRef<any>;

  ngAfterContentInit(): void {
    console.log(this.content);
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}



