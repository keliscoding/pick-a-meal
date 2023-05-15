import { Component, OnInit } from '@angular/core';
import { Meals, MealCard } from 'src/app/interfaces/Meal';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {
  data: MealCard[] = [];

  constructor(private mealsService: MealsService) {}

  ngOnInit() {
    this.mealsService.getRandomMeals().subscribe((data) => {
      this.data = data.meals;
    });
  }
}
