import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  name: string | null = '';

  constructor(
    private router: Router,
    private mealsService: MealsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');

    this.loading = true;
    this.mealsService
      .getMealByCategoryName(this.name)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        const meal = data.meals;

        if (!meal) {
          return this.router.navigate(['/not-found']);
        }
        return (this.data = meal);
      });
  }
}
