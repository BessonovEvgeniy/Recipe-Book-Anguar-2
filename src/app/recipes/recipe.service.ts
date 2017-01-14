import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "./ingredient";

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Shashlik', 'Shashlik', "https://avatanplus.com/files/resources/mid/575c3e740c7de1554053f553.png", [
      new Ingredient('Mjasko', 2), new Ingredient('Loochok',4)
    ]),
    new Recipe('Greek Salad', 'Ochen vkysno', "http://notefood.ru/wp-content/uploads/2014/12/salat-grecheskiy.jpg", [
      new Ingredient('Greek', 1), new Ingredient('Cheese',2)
    ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
