import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
    new Recipe('A test recipe', 'This is a test recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
