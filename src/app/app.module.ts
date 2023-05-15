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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealsComponent,
    NotFoundComponent,
    MealCardComponent,
    SliceWordsPipe,
    MealDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
