import { main } from "@angular/compiler-cli/src/main";

export class RecipeModel {
  public title: string
  public mainPictureUri: string
  public numberPeople: number
  public timeCooking: number
  public difficulty: number
  public categories: Array<string>
  public stepsCooking: Array<string>

  constructor(title: string,
              mainPictureUri: string,
              numberPeople: number,
              timeCooking: number,
              difficulty: number,
              categories: Array<string>,
              stepsCooking: Array<string>) {
    this.title = title
    this.mainPictureUri = mainPictureUri
    this.numberPeople = numberPeople
    this.timeCooking = timeCooking
    this.difficulty = difficulty
    this.categories = categories
    this.stepsCooking = stepsCooking
  }
}

export enum DIFICULTY_LEVELS {
  VERY_EASY,
  EASY,
  NORMAL,
  HARD,
  VERY_HARD
}

export const DEFAULT_TIMECOOKING = 5
export const DEFAULT_NUMBERPEOPLE = 1
export const DEFAULT_DIFFICULTY = DIFICULTY_LEVELS.NORMAL

export class RecipeBuilder {
  private readonly recipe: RecipeModel

  private static defaultRecipe(): RecipeModel {
    return new RecipeModel(
      null,
      null,
      DEFAULT_NUMBERPEOPLE,
      DEFAULT_TIMECOOKING,
      DEFAULT_DIFFICULTY,
      null,
      null
    )
  }

  constructor() {
    this.recipe = RecipeBuilder.defaultRecipe()
  }

  withTitle(title: string) {
    this.recipe.title = title
    return this
  }

  withPictureUri(mainPictureUri: string) {
    this.recipe.mainPictureUri = mainPictureUri
    return this
  }

  withNumberPeople(numberPeople: number) {
    this.recipe.numberPeople = numberPeople
    return this
  }

  withTimeCooking(timeCooking: number) {
    this.recipe.timeCooking = timeCooking
    return this
  }

  withDifficulty(difficulty: number) {
    this.recipe.difficulty = difficulty
    return this
  }

  addCategory(category: string) {
    this.recipe.categories.push(category)
    return this
  }

  withRecipe(stepsCooking: string) {
    this.recipe.stepsCooking.push(stepsCooking)
    return this
  }

  build() {
    return this.recipe
  }
}
