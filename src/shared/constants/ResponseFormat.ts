export const ResponseFormat = {
  JSON: 'json',
  SRC: 'src',
} as const;

export type ResponseFormatType = typeof ResponseFormat[keyof typeof ResponseFormat];