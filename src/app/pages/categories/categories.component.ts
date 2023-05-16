import { MealsService } from 'src/app/services/meals.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  loading: boolean = false;
  data: Category[] = [];

  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.mealsService
      .getMealCategories()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => {
        this.data = data.categories;
      });
  }
}
