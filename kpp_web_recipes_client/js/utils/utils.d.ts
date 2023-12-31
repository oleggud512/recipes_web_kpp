export function getPathSegments(href: string) : string[]

export class Constants {
  static currentRecipeId: string
  static baseUrl: string
  static baseApiUrl: string
  static baseImageUrl: string
  static groceryPlaceholder: string
  static recipePlaceholder: string
  static orGroceryPlaceholder(photoUrl: string) : string
  static orRecipePlaceholder(photoUrl: string) : string
}