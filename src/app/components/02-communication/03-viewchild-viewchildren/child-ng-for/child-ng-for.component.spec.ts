import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgForComponent } from './child-ng-for.component';

describe('ChildNgForComponent', () => {
  let component: ChildNgForComponent;
  let fixture: ComponentFixture<ChildNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
