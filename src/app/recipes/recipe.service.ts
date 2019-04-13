import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";

export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe [] =  [
        new Recipe(
        'A test recipe', 
        'This is a test recipe', 
        'https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        [
          new Ingredient('Meat', 1),
          new Ingredient('Spices', 1)
        ]        
        ),

        new Recipe('Another test recipe', 'This is a test recipe', 
        'https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        [
          new Ingredient('Meat', 1),
          new Ingredient('Spices', 1)
        ])
        
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }
}