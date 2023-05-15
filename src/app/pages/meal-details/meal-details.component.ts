import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal, MealDetails } from 'src/app/interfaces/Meal';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss'],
})
export class MealDetailsComponent implements OnInit {
  data: MealDetails = {};

  constructor(
    private mealsService: MealsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.mealsService.getMealById(id).subscribe((data) => {
      this.data = data.meals[0];
    });
  }
}
