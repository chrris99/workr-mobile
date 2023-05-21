import { FontWeight, fontFamily } from './fontFamily';
import { FontSize, fontSize } from './fontSize';

export type TextType = `${FontSize}-${FontWeight}`

type FontStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
};

export const fonts: Record<TextType, FontStyle> = {
  'body-XS-regular': {
    ...fontSize['body-XS'],
    fontFamily: fontFamily['regular']
  },
  'body-XS-medium': {
    ...fontSize['body-XS'],
    fontFamily: fontFamily['medium']
  },
  'body-XS-semibold': {
    ...fontSize['body-XS'],
    fontFamily: fontFamily['semibold']
  },
  'body-XS-bold': {
    ...fontSize['body-XS'],
    fontFamily: fontFamily['bold']
  },
  'body-S-regular': {
    ...fontSize['body-S'],
    fontFamily: fontFamily['regular']
  },
  'body-S-medium': {
    ...fontSize['body-S'],
    fontFamily: fontFamily['medium']
  },
  'body-S-semibold': {
    ...fontSize['body-S'],
    fontFamily: fontFamily['semibold']
  },
  'body-S-bold': {
    ...fontSize['body-S'],
    fontFamily: fontFamily['bold']
  },
  'body-M-regular': {
    ...fontSize['body-M'],
    fontFamily: fontFamily['regular']
  },
  'body-M-semibold': {
    ...fontSize['body-M'],
    fontFamily: fontFamily['semibold']
  },
  'body-L-semibold': {
    ...fontSize['body-L'],
    fontFamily: fontFamily['semibold']
  },
  'body-L-bold': {
    ...fontSize['body-L'],
    fontFamily: fontFamily['bold']
  },
  'heading-XS-semibold': {
    ...fontSize['heading-XS'],
    fontFamily: fontFamily['semibold']
  }
};