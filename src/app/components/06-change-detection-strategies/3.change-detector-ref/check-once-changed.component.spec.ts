import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOnceChangedComponent } from './check-once-changed.component';

describe('CheckOnceChangedComponent', () => {
  let component: CheckOnceChangedComponent;
  let fixture: ComponentFixture<CheckOnceChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckOnceChangedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckOnceChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
