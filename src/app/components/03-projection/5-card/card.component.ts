import { NgIf, NgTemplateOutlet } from '@angular/common';
import { type AfterContentInit, Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [NgIf, NgTemplateOutlet]
})
export class CardComponent implements AfterContentInit {
  @Input({ required: false }) expanded = true;

  @ContentChild('greet') content!: any;

  ngAfterContentInit(): void {
    console.log(this.content);
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}



