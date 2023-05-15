import { Component, Input } from '@angular/core';
import { MealCard } from 'src/app/interfaces/Meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent {
  @Input() meal: any = '';

  constructor() {
    console.log(this.meal);
  }
}
