export const Sort = {
  ASC: 'ASC',
  DESC: 'DESC',
  RANDOM: 'RANDOM'
} as const;

export type SortType = typeof Sort[keyof typeof Sort];