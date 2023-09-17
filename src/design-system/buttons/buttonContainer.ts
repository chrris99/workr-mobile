import { ButtonSize, ButtonVariant } from "@/design-system/buttons/buttons";
import { spacing } from "@/design-system/spacing/spacing";
import { ViewStyle } from "react-native";

type ButtonContainerType = `${ButtonVariant}-${ButtonSize}`;

const linkContainerStyle: Pick<ViewStyle, "display" | "gap" | "padding"> = {
  padding: 0,
};

export const buttonContainerStyle: Record<
  ButtonContainerType,
  Pick<ViewStyle, "paddingHorizontal" | "paddingVertical" | "padding">
> = {
  "solid-sm": {
    paddingHorizontal: spacing["spacing-3.5"],
    paddingVertical: spacing["spacing-2"],
  },
  "solid-md": {
    paddingHorizontal: spacing["spacing-4"],
    paddingVertical: spacing["spacing-2.5"],
  },
  "solid-lg": {
    paddingHorizontal: spacing["spacing-4.5"],
    paddingVertical: spacing["spacing-2.5"],
  },
  "solid-xl": {
    paddingHorizontal: spacing["spacing-5"],
    paddingVertical: spacing["spacing-3"],
  },
  "solid-2xl": {
    paddingHorizontal: spacing["spacing-7"],
    paddingVertical: spacing["spacing-4"],
  },
  "link-sm": linkContainerStyle,
  "link-md": linkContainerStyle,
  "link-lg": linkContainerStyle,
  "link-xl": linkContainerStyle,
  "link-2xl": linkContainerStyle,
  "icon-sm": {
    padding: spacing["spacing-2"],
  },
  "icon-md": {
    padding: spacing["spacing-2.5"],
  },
  "icon-lg": {
    padding: spacing["spacing-3"],
  },
  "icon-xl": {
    padding: spacing["spacing-3.5"],
  },
  "icon-2xl": {
    padding: spacing["spacing-4"],
  },
};
