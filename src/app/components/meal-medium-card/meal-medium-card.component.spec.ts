import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealMediumCardComponent } from './meal-medium-card.component';

describe('MealMediumCardComponent', () => {
  let component: MealMediumCardComponent;
  let fixture: ComponentFixture<MealMediumCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealMediumCardComponent]
    });
    fixture = TestBed.createComponent(MealMediumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
