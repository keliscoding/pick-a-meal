import { Component, Input, OnInit } from '@angular/core';
import { Meals, MealCard } from 'src/app/interfaces/Meal';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {
  data: MealCard[] = [];
  searchMeal: string = '';

  constructor(private mealsService: MealsService) {}

  ngOnInit() {
    this.mealsService.getRandomMeals().subscribe((data) => {
      this.data = data.meals;
    });
  }

  search() {
    this.mealsService.getMealsOnSearch(this.searchMeal).subscribe((data) => {
      this.data = data.meals;
    });
  }
}
