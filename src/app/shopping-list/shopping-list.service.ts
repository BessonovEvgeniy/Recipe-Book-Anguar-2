import { Injectable } from '@angular/core';
import {Ingredient} from "../recipes/ingredient";

@Injectable()
export class ShoppingListService {

  ingredients: Ingredient[] = [];

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  setIngredients(ingredients: Ingredient[]){
    Array.prototype.push.apply(this.ingredients,ingredients);
  }
}
