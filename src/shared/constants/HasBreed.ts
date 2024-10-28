export const HasBreeds = {
  TRUE: 1,
  FALSE: 0
} as const

export type HasBreedType = typeof HasBreeds[keyof typeof HasBreeds]