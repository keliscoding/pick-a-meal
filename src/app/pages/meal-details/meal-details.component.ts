import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MealDetails } from 'src/app/interfaces/Meal';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss'],
})
export class MealDetailsComponent implements OnInit {
  data: MealDetails = {};
  loading: boolean = false;

  constructor(
    private mealsService: MealsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.loading = true;
    this.mealsService
      .getMealById(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.data = data.meals[0];
      });
  }
}
