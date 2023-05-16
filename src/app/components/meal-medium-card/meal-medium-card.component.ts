import { Component, Input } from '@angular/core';
import { MealByCategory } from 'src/app/interfaces/Meal';

@Component({
  selector: 'app-meal-medium-card',
  templateUrl: './meal-medium-card.component.html',
  styleUrls: ['./meal-medium-card.component.scss']
})
export class MealMediumCardComponent {
  @Input() data: MealByCategory = {};
}
