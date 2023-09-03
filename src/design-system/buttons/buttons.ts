import { ViewStyle } from "react-native";
import { buttonContainerStyle } from "./buttonContainer";
import {
  buttonColor,
  buttonHiglightColor,
  buttonTextColor,
} from "./buttonColor";
import { buttonText } from "./buttonText";
import { IconSize } from "../icons/Icon";
import { buttonIcon } from "./buttonIcon";
import { TextType } from "../typography/fonts";
import { Color } from "../colors/colors";

export type ButtonHierarchy = "primary" | "secondary" | "gray";
export type ButtonVariant = "solid" | "link" | "icon";
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";
export type ButtonType = `${ButtonHierarchy}-${ButtonVariant}-${ButtonSize}`;

type ButtonStyle = {
  containerStyle: Pick<
    ViewStyle,
    | "padding"
    | "paddingHorizontal"
    | "paddingVertical"
    | "backgroundColor"
    | "borderColor"
    | "borderRadius"
    | "borderWidth"
  >;
  containerHighlightColor?: string;
  textType: TextType;
  textColor: Color;
  iconSize: IconSize;
};

const getButtonStyle = (
  hierarchy: ButtonHierarchy,
  variant: ButtonVariant,
  size: ButtonSize
): ButtonStyle => ({
  containerStyle: {
    ...buttonContainerStyle[`${variant}-${size}`],
    ...buttonColor[`${hierarchy}-${variant}`],
  },
  containerHighlightColor: buttonHiglightColor[`${hierarchy}-${variant}`],
  textType: buttonText[size],
  textColor: buttonTextColor[`${hierarchy}-${variant}`],
  iconSize: buttonIcon[size],
});

export const buttons: Record<ButtonType, ButtonStyle> = {
  "primary-solid-sm": getButtonStyle("primary", "solid", "sm"),
  "primary-solid-md": getButtonStyle("primary", "solid", "md"),
  "primary-solid-lg": getButtonStyle("primary", "solid", "lg"),
  "primary-solid-xl": getButtonStyle("primary", "solid", "xl"),
  "primary-solid-2xl": getButtonStyle("primary", "solid", "2xl"),
  "primary-link-sm": getButtonStyle("primary", "link", "sm"),
  "primary-link-md": getButtonStyle("primary", "link", "md"),
  "primary-link-lg": getButtonStyle("primary", "link", "lg"),
  "primary-link-xl": getButtonStyle("primary", "link", "xl"),
  "primary-link-2xl": getButtonStyle("primary", "link", "2xl"),
  "primary-icon-sm": getButtonStyle("primary", "icon", "sm"),
  "primary-icon-md": getButtonStyle("primary", "icon", "md"),
  "primary-icon-lg": getButtonStyle("primary", "icon", "lg"),
  "primary-icon-xl": getButtonStyle("primary", "icon", "xl"),
  "primary-icon-2xl": getButtonStyle("primary", "icon", "2xl"),
  "secondary-solid-sm": getButtonStyle("secondary", "solid", "sm"),
  "secondary-solid-md": getButtonStyle("secondary", "solid", "md"),
  "secondary-solid-lg": getButtonStyle("secondary", "solid", "lg"),
  "secondary-solid-xl": getButtonStyle("secondary", "solid", "xl"),
  "secondary-solid-2xl": getButtonStyle("secondary", "solid", "2xl"),
  "secondary-link-sm": getButtonStyle("secondary", "link", "sm"),
  "secondary-link-md": getButtonStyle("secondary", "link", "md"),
  "secondary-link-lg": getButtonStyle("secondary", "link", "lg"),
  "secondary-link-xl": getButtonStyle("secondary", "link", "xl"),
  "secondary-link-2xl": getButtonStyle("secondary", "link", "2xl"),
  "secondary-icon-sm": getButtonStyle("secondary", "icon", "sm"),
  "secondary-icon-md": getButtonStyle("secondary", "icon", "md"),
  "secondary-icon-lg": getButtonStyle("secondary", "icon", "lg"),
  "secondary-icon-xl": getButtonStyle("secondary", "icon", "xl"),
  "secondary-icon-2xl": getButtonStyle("secondary", "icon", "2xl"),
  "gray-solid-sm": getButtonStyle("gray", "solid", "sm"),
  "gray-solid-md": getButtonStyle("gray", "solid", "md"),
  "gray-solid-lg": getButtonStyle("gray", "solid", "lg"),
  "gray-solid-xl": getButtonStyle("gray", "solid", "xl"),
  "gray-solid-2xl": getButtonStyle("gray", "solid", "2xl"),
  "gray-link-sm": getButtonStyle("gray", "link", "sm"),
  "gray-link-md": getButtonStyle("gray", "link", "md"),
  "gray-link-lg": getButtonStyle("gray", "link", "lg"),
  "gray-link-xl": getButtonStyle("gray", "link", "xl"),
  "gray-link-2xl": getButtonStyle("gray", "link", "2xl"),
  "gray-icon-sm": getButtonStyle("gray", "icon", "sm"),
  "gray-icon-md": getButtonStyle("gray", "icon", "md"),
  "gray-icon-lg": getButtonStyle("gray", "icon", "lg"),
  "gray-icon-xl": getButtonStyle("gray", "icon", "xl"),
  "gray-icon-2xl": getButtonStyle("gray", "icon", "2xl"),
};
