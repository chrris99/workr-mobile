import { TextStyle } from "react-native";

export type FontSize = `${"body" | "heading"}-${Size}`;

type Size = "XS" | "S" | "M" | "L" | "XL";

type FontSizeStyle = Pick<
  TextStyle,
  "fontSize" | "lineHeight" | "letterSpacing"
>;

export const fontSize: Record<FontSize, FontSizeStyle> = {
  "body-XS": {
    fontSize: 12,
    lineHeight: 18,
  },
  "body-S": {
    fontSize: 14,
    lineHeight: 20,
  },
  "body-M": {
    fontSize: 16,
    lineHeight: 24,
  },
  "body-L": {
    fontSize: 18,
    lineHeight: 28,
  },
  "body-XL": {
    fontSize: 20,
    lineHeight: 30,
  },
  "heading-XS": {
    fontSize: 24,
    lineHeight: 32,
  },
  "heading-S": {
    fontSize: 30,
    lineHeight: 38,
  },
  "heading-M": {
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: -0.02,
  },
  "heading-L": {
    fontSize: 48,
    lineHeight: 60,
    letterSpacing: undefined,
  },
  "heading-XL": {
    fontSize: 0,
    lineHeight: 0,
    letterSpacing: undefined,
  },
};
