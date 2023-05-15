import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
})
export class MealCardComponent implements OnInit {
  @Input() meal: any = '';
  tags = [];

  constructor() {}

  ngOnInit(): void {
    const allTags = this.meal.strTags;
    this.tags = (allTags != undefined) ? allTags.split(',') : ['None'];

  }
}
