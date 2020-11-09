import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NGXLogger } from "ngx-logger";
import {
  DEFAULT_NUMBERPEOPLE,
  DEFAULT_TIMECOOKING,
  DIFICULTY_LEVELS,
  RecipeBuilder,
  RecipeModel
} from "../../models/recipe.model";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newRecipeForm
  defaultRecipe: RecipeModel

  private static defaultFormRecipeValues(): RecipeModel {
    return new RecipeBuilder().build()
  }

  constructor(private formBuilder: FormBuilder, private log: NGXLogger) {
    this.defaultRecipe = NewComponent.defaultFormRecipeValues()

    this.newRecipeForm = this.formBuilder.group({
      title: new FormControl(this.defaultRecipe.title, [Validators.required]),
      mainPictureUri: new FormControl(this.defaultRecipe.mainPictureUri, [Validators.required]),
      numberPeople: new FormControl(this.defaultRecipe.numberPeople, [Validators.required, Validators.min(1)]),
      timeCooking: new FormControl(this.defaultRecipe.timeCooking, [Validators.required, Validators.min(1)]),
      difficulty: new FormControl(this.defaultRecipe.difficulty, [Validators.required]),
      categories: new FormControl(this.defaultRecipe.categories),
      stepsCooking: new FormControl(this.defaultRecipe.stepsCooking, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(recipeData) {
    this.log.debug(`Recipe Data to send to backend ${JSON.stringify(recipeData)}`)
    this.newRecipeForm.reset(JSON.parse(JSON.stringify(this.defaultRecipe)))
  }

  addRecipeStep() {

  }

  deleteRecipeStep() {

  }

}
