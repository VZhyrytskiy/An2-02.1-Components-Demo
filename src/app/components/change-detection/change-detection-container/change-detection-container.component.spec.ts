import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionContainerComponent } from './change-detection-container.component';

describe('ChangeDetactionContainerComponent', () => {
  let component: ChangeDetectionContainerComponent;
  let fixture: ComponentFixture<ChangeDetectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
