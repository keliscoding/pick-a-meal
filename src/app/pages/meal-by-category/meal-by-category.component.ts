import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MealByCategory } from 'src/app/interfaces/Meal';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-meal-by-category',
  templateUrl: './meal-by-category.component.html',
  styleUrls: ['./meal-by-category.component.scss'],
})
export class MealByCategoryComponent {
  data: MealByCategory[] = [];
  loading: boolean = false;

  constructor(
    private mealsService: MealsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');

    this.loading = true;
    this.mealsService
      .getMealByCategoryName(name)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.data = data.meals;
      });
  }
}
