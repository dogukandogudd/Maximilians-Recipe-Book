import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe:Recipe
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
