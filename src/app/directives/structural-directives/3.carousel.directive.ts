import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

type ContextType = { ctr: CarouselDirective, '$implicit': string };

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  @Input('appCarouselIterate') images!: string[];

  currentIndex = 0;

  constructor(
    private template: TemplateRef<ContextType>,
    private container: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.renderCurrentSlide();
  }

  next() {
    this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    this.renderCurrentSlide();
  }

  prev() {
    this.currentIndex = this.currentIndex - 1 < 0 ? this.images.length - 1: this.currentIndex - 1;
    this.renderCurrentSlide();
  }

  private renderCurrentSlide(){
    const context: ContextType = {
      ctr: this,
      '$implicit': this.images[this.currentIndex]
    };

    this.container.clear();
    this.container.createEmbeddedView(this.template, context);
  }

}
