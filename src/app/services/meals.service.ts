import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meals } from '../interfaces/Meal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  baseUrl: string = 'https://www.themealdb.com/api/json/v1/1/'; //search.php?f=p
  constructor(private http: HttpClient) {}

  getRandomMeals(): Observable<Meals> {
    // not so random since I dont have the api key ehehhe
    return this.http.get<Meals>(this.baseUrl + 'search.php?f=p');
  }
}
