import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  showShoppingList(){
    this.shoppingListService.setIngredients(this.selectedRecipe.ingredients);
  }

}
