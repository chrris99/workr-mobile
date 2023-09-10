import { ViewStyle } from "react-native";
import { colors } from "../colors/colors";

type ShadowSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type ShadowStyle = Pick<
  ViewStyle,
  "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius"
>;

export const shadows: Record<ShadowSize, ShadowStyle> = {
  xs: {
    shadowColor: colors['gray-200'],
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5
  },
  sm: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.5
  },
  md: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.24,
    shadowRadius: 2.6
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.26,
    shadowRadius: 4.65
  },
  xl: {},
  "2xl": {},
};
