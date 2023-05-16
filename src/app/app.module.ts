import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MealsComponent } from './pages/meals/meals.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SliceWordsPipe } from './pipes/slice-words.pipe';
import { MealDetailsComponent } from './pages/meal-details/meal-details.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SliceParagraphsPipe } from './pipes/slice-paragraphs.pipe';
import { MealByCategoryComponent } from './pages/meal-by-category/meal-by-category.component';
import { MealMediumCardComponent } from './components/meal-medium-card/meal-medium-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealsComponent,
    NotFoundComponent,
    MealCardComponent,
    SliceWordsPipe,
    MealDetailsComponent,
    CategoriesComponent,
    CatCardComponent,
    LoadingSpinnerComponent,
    SliceParagraphsPipe,
    MealByCategoryComponent,
    MealMediumCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
