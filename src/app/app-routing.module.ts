import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MealsComponent } from './pages/meals/meals.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MealDetailsComponent } from './pages/meal-details/meal-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'meals/:id', component: MealDetailsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
