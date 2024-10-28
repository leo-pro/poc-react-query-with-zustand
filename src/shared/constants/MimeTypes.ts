export const Mime = {
  JPG: 'jpg',
  PNG: 'png',
  GIF: 'gif'
} as const;

export type MimeType = typeof Mime[keyof typeof Mime];