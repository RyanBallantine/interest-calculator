import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculateComponent } from './interest-calculate.component';

describe('InterestCalculateComponent', () => {
  let component: InterestCalculateComponent;
  let fixture: ComponentFixture<InterestCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestCalculateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
