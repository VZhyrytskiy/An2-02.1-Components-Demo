import { type AfterContentInit, Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterContentInit {
  @Input() expanded = true;

  @ContentChild('greet') content!: any;

  ngAfterContentInit(): void {
    console.log(this.content);
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}



