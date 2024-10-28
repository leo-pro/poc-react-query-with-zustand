export const Size = {
  THUMB: 'thumb',
  SMALL: 'small',
  MED: 'med',
  FULL: 'full'
} as const;

export type SizeType = typeof Size[keyof typeof Size];