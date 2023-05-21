export type FontSize = `${'body' | 'heading'}-${Size}`;

type Size =  'XS' | 'S' | 'M' | 'L' | 'XL'

type FontSizeStyle = {
  fontSize: number;
  lineHeight: number;
  letterSpacing?: number;
};

export const fontSize: Record<FontSize, FontSizeStyle> = {
  'body-XS': {
    fontSize: 12,
    lineHeight: 18
  },
  'body-S': {
    fontSize: 14,
    lineHeight: 20
  },
  'body-M': {
    fontSize: 16,
    lineHeight: 24
  },
  'body-L': {
    fontSize: 18,
    lineHeight: 28
  },
  'body-XL': {
    fontSize: 20,
    lineHeight: 30
  },
  'heading-XS': {
    fontSize: 24,
    lineHeight: 32
  },
  'heading-S': {
    fontSize: 30,
    lineHeight: 34
  },
  "heading-M": {
    fontSize: 0,
    lineHeight: 0,
    letterSpacing: undefined
  },
  "heading-L": {
    fontSize: 0,
    lineHeight: 0,
    letterSpacing: undefined
  },
  "heading-XL": {
    fontSize: 0,
    lineHeight: 0,
    letterSpacing: undefined
  }
};