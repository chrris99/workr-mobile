import { TextStyle } from "react-native";
import { FontWeight, fontFamily } from "./fontFamily";
import { FontSize, fontSize } from "./fontSize";

export type TextType = `${FontSize}-${FontWeight}`;

type FontStyle = Pick<TextStyle, "fontFamily" | "fontSize" | "letterSpacing">;

export const fonts: Record<TextType, FontStyle> = {
  "body-XS-regular": {
    ...fontSize["body-XS"],
    fontFamily: fontFamily["regular"],
  },
  "body-XS-medium": {
    ...fontSize["body-XS"],
    fontFamily: fontFamily["medium"],
  },
  "body-XS-semibold": {
    ...fontSize["body-XS"],
    fontFamily: fontFamily["semibold"],
  },
  "body-XS-bold": {
    ...fontSize["body-XS"],
    fontFamily: fontFamily["bold"],
  },
  "body-S-regular": {
    ...fontSize["body-S"],
    fontFamily: fontFamily["regular"],
  },
  "body-S-medium": {
    ...fontSize["body-S"],
    fontFamily: fontFamily["medium"],
  },
  "body-S-semibold": {
    ...fontSize["body-S"],
    fontFamily: fontFamily["semibold"],
  },
  "body-S-bold": {
    ...fontSize["body-S"],
    fontFamily: fontFamily["bold"],
  },
  "body-M-regular": {
    ...fontSize["body-M"],
    fontFamily: fontFamily["regular"],
  },
  "body-M-medium": {
    ...fontSize["body-M"],
    fontFamily: fontFamily["medium"],
  },
  "body-M-semibold": {
    ...fontSize["body-M"],
    fontFamily: fontFamily["semibold"],
  },
  "body-M-bold": {
    ...fontSize["body-M"],
    fontFamily: fontFamily["bold"],
  },
  "body-L-regular": {
    ...fontSize["body-L"],
    fontFamily: fontFamily["regular"],
  },
  "body-L-medium": {
    ...fontSize["body-L"],
    fontFamily: fontFamily["medium"],
  },
  "body-L-semibold": {
    ...fontSize["body-L"],
    fontFamily: fontFamily["semibold"],
  },
  "body-L-bold": {
    ...fontSize["body-L"],
    fontFamily: fontFamily["bold"],
  },
  "body-XL-regular": {
    ...fontSize["body-XL"],
    fontFamily: fontFamily["regular"],
  },
  "body-XL-medium": {
    ...fontSize["body-XL"],
    fontFamily: fontFamily["medium"],
  },
  "body-XL-semibold": {
    ...fontSize["body-XL"],
    fontFamily: fontFamily["semibold"],
  },
  "body-XL-bold": {
    ...fontSize["body-XL"],
    fontFamily: fontFamily["bold"],
  },
  "heading-XS-regular": {
    ...fontSize["heading-XS"],
    fontFamily: fontFamily["regular"],
  },
  "heading-XS-medium": {
    ...fontSize["heading-XS"],
    fontFamily: fontFamily["medium"],
  },
  "heading-XS-semibold": {
    ...fontSize["heading-XS"],
    fontFamily: fontFamily["semibold"],
  },
  "heading-XS-bold": {
    ...fontSize["heading-XS"],
    fontFamily: fontFamily["bold"],
  },
  "heading-S-regular": {
    ...fontSize["heading-S"],
    fontFamily: fontFamily["regular"],
  },
  "heading-S-medium": {
    ...fontSize["heading-S"],
    fontFamily: fontFamily["medium"],
  },
  "heading-S-semibold": {
    ...fontSize["heading-S"],
    fontFamily: fontFamily["semibold"],
  },
  "heading-S-bold": {
    ...fontSize["heading-S"],
    fontFamily: fontFamily["bold"],
  },
  "heading-M-regular": {
    ...fontSize["heading-M"],
    fontFamily: fontFamily["regular"],
  },
  "heading-M-medium": {
    ...fontSize["heading-M"],
    fontFamily: fontFamily["medium"],
  },
  "heading-M-semibold": {
    ...fontSize["heading-M"],
    fontFamily: fontFamily["semibold"],
  },
  "heading-M-bold": {
    ...fontSize["heading-M"],
    fontFamily: fontFamily["bold"],
  },
  "heading-L-regular": {
    ...fontSize["heading-L"],
    fontFamily: fontFamily["regular"],
  },
  "heading-L-medium": {
    ...fontSize["heading-L"],
    fontFamily: fontFamily["medium"],
  },
  "heading-L-semibold": {
    ...fontSize["heading-L"],
    fontFamily: fontFamily["semibold"],
  },
  "heading-L-bold": {
    ...fontSize["heading-L"],
    fontFamily: fontFamily["bold"],
  },
  "heading-XL-regular": {
    ...fontSize["heading-XL"],
    fontFamily: fontFamily["regular"],
  },
  "heading-XL-medium": {
    ...fontSize["heading-XL"],
    fontFamily: fontFamily["medium"],
  },
  "heading-XL-semibold": {
    ...fontSize["heading-XL"],
    fontFamily: fontFamily["semibold"],
  },
  "heading-XL-bold": {
    ...fontSize["heading-XL"],
    fontFamily: fontFamily["bold"],
  },
};
