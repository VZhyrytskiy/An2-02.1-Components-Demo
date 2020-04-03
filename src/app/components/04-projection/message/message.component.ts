import { Component, Input, ContentChild, ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements AfterContentInit {
  @Input() title: string;

  @ContentChild('content') content: ElementRef;

  ngAfterContentInit() {
    console.log(this.content.nativeElement.innerText);
  }
}
