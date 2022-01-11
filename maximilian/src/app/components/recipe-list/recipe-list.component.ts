import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private RecipeService: RecipeService,
     private router: Router,
     private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
