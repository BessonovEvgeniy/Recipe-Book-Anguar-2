import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../recipes/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Myasko', 1)
  ];

  constructor(private shoppingListServise: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListServise.getIngredients();
  }

}
