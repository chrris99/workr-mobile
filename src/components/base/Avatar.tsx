import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type AvatarSize = "XS" | "S" | "M" | "L" | "XL" | "2XL";
type AvatarType = "image" | "icon" | "monogram";

const avatarSize: Record<AvatarSize, ViewStyle> = {
  XS: {
    width: spacing["spacing-6"],
    height: spacing["spacing-6"],
  },
  S: {
    width: spacing["spacing-8"],
    height: spacing["spacing-8"],
  },
  M: {
    width: spacing["spacing-10"],
    height: spacing["spacing-10"],
  },
  L: {
    width: spacing["spacing-12"],
    height: spacing["spacing-12"],
  },
  XL: {
    width: spacing["spacing-14"],
    height: spacing["spacing-14"],
  },
  "2XL": {
    width: spacing["spacing-24"],
    height: spacing["spacing-24"],
  },
};

const iconSize: Record<AvatarSize, number> = {
  XS: spacing["spacing-4"],
  S: spacing["spacing-5"],
  M: spacing["spacing-6"],
  L: spacing["spacing-7"],
  XL: spacing["spacing-8"],
  "2XL": spacing["spacing-10"],
};

interface AvatarProps {
  type?: AvatarType;
  size?: AvatarSize;
}

// TODO: Move user icon to icons.ts

export const Avatar = ({ type, size }: AvatarProps) => {
  return (
    <View style={[styles.avatar, avatarSize[size ? size : "M"]]}>
      <Icon name="User" />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 200,
    backgroundColor: colors["primary-100"],
    borderWidth: 1.5,
    borderColor: colors["primary-700"],
    alignItems: "center",
    justifyContent: "center",
  },
});
