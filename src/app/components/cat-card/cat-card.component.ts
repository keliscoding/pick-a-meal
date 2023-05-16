import { Category } from './../../interfaces/Category';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent {
  @Input()
  data: Category = {};
}
