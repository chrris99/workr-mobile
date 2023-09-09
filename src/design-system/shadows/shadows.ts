import { ViewStyle } from "react-native";

type ShadowSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type ShadowStyle = Pick<
  ViewStyle,
  "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius"
>;

export const shadows: Record<ShadowSize, ShadowStyle> = {
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
  "2xl": {},
};
