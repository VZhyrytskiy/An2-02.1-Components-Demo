import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

type ContextType = { ctr: CarouselDirective; $implicit: string };

@Directive({
  selector: '[appCarousel]',
  standalone: true,
})
export class CarouselDirective implements OnInit {
  private template = inject(TemplateRef<ContextType>);
  private container = inject(ViewContainerRef);

  @Input({ required: true, alias: 'appCarouselIterate' }) images!: string[];

  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.renderCurrentSlide();
  }

  next(): void {
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    this.renderCurrentSlide();
  }

  prev(): void {
    this.currentIndex =
      this.currentIndex - 1 < 0
        ? this.images.length - 1
        : this.currentIndex - 1;
    this.renderCurrentSlide();
  }

  private renderCurrentSlide() {
    const context: ContextType = {
      ctr: this,
      $implicit: this.images[this.currentIndex],
    };

    this.container.clear();
    this.container.createEmbeddedView(this.template, context);
  }
}
