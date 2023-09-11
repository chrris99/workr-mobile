import { ViewStyle } from "react-native";
import { ButtonHierarchy, ButtonVariant } from "./buttons";
import { Color, colors } from "../colors/colors";

export type ButtonColorType = `${ButtonHierarchy}-${ButtonVariant}`;

export const buttonColor: Record<
  ButtonColorType,
  Pick<ViewStyle, "backgroundColor" | "borderColor" | "borderWidth">
> = {
  "primary-solid": {
    backgroundColor: colors["primary-600"],
  },
  "primary-link": {},
  "primary-icon": {
    backgroundColor: colors["primary-600"],
  },
  "secondary-solid": {
    backgroundColor: colors["primary-100"],
  },
  "secondary-link": {},
  "secondary-icon": {
    backgroundColor: colors["primary-100"],
  },
  "gray-solid": {
    backgroundColor: colors["gray-50"],
    borderColor: colors["gray-300"],
    borderWidth: 1,
  },
  "gray-link": {},
  "gray-icon": {
    backgroundColor: colors["gray-50"],
    borderColor: colors["gray-300"],
    borderWidth: 1,
  },
};

export const buttonHiglightColor: Record<ButtonColorType, string | undefined> =
  {
    "primary-solid": colors["primary-700"],
    "primary-link": undefined,
    "primary-icon": colors["primary-700"],
    "secondary-solid": colors["primary-200"],
    "secondary-link": undefined,
    "secondary-icon": colors["primary-200"],
    "gray-solid": colors["gray-100"],
    "gray-link": undefined,
    "gray-icon": colors["gray-100"],
  };

export const buttonTextColor: Record<ButtonColorType, Color> = {
  "primary-solid": "white",
  "primary-link": "primary-700",
  "primary-icon": "white",
  "secondary-solid": "primary-700",
  "secondary-link": "primary-700",
  "secondary-icon": "primary-700",
  "gray-solid": "gray-700",
  "gray-link": "gray-700",
  "gray-icon": "gray-700",
};
