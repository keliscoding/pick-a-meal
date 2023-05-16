import { Component, OnInit } from '@angular/core';
import { MealCard, Meals } from 'src/app/interfaces/Meal';
import { MealsService } from 'src/app/services/meals.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {
  data: MealCard[] = [];
  searchMeal: string = '';
  loading: boolean = false;
  content: boolean = true;

  constructor(private mealsService: MealsService) {}

  ngOnInit() {
    this.loading = true;
    this.mealsService
      .getRandomMeals()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.data = data.meals;
        this.content = true;
      });
  }

  search() {
    this.loading = true;
    this.content = false;
    this.mealsService
      .getMealsOnSearch(this.searchMeal)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        if (data.meals.length > 0) {
          this.data = data.meals;
          this.content = true;
        }
        this.searchMeal = '';
      });
  }
}
