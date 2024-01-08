import { Component, Input, ContentChild, ElementRef, type AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent implements AfterContentInit {
  @Input({ required: true })
  title!: string;

  @ContentChild('content')
  content!: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.content.nativeElement.innerText);
  }
}
