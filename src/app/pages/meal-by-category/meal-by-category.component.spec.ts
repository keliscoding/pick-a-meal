import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealByCategoryComponent } from './meal-by-category.component';

describe('MealByCategoryComponent', () => {
  let component: MealByCategoryComponent;
  let fixture: ComponentFixture<MealByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealByCategoryComponent]
    });
    fixture = TestBed.createComponent(MealByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
