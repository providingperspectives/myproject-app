import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
 
  private recipes: Recipe [ ] = [new Recipe
    ('The Traditional Way', 'Change your Entire Concept',
    'https://i0.wp.com/besthomediet.com/wp-content/uploads/2021/09/Rivers-Native-Soup.jpg',
    [ new Ingredient('Meat',1 ),
      new Ingredient('Draw-Soup',6)]),

  new Recipe
  ('Wecome Home', 'Home is Home',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/Okro_soup_with_shrimps%2Cdried_fish%2Ccow_leg_and_tail_with_meat.jpg',
  [new Ingredient('Native-Soup',2),
  new Ingredient('Egusi-Soup', 4)])];

  constructor(private slService: ShoppingListService){}

getRecipes() {
  return this.recipes.slice();
}

getRecipe(index:number){
  return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[] ){
this.slService.addIngredients(ingredients);
}
}


