import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { spacing } from "../../design-system/spacing/spacing";
import User from "../../../assets/icons/user.svg";
import { colors } from "../../design-system/colors/colors";

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
    width: spacing["spacing-16"],
    height: spacing["spacing-16"],
  },
};

const iconSize: Record<AvatarSize, number> = {
  XS: spacing["spacing-4"],
  S: spacing["spacing-5"],
  M: spacing["spacing-6"],
  L: spacing["spacing-7"],
  XL: spacing["spacing-8"],
  "2XL": spacing["spacing-8"],
};

interface AvatarProps {
  type?: AvatarType;
  size?: AvatarSize;
}

export const Avatar = ({ type, size }: AvatarProps) => {
  return (
    <View style={[styles.avatar, avatarSize[size ? size : "M"]]}>
      <User
        width={iconSize[size ? size : "M"]}
        height={iconSize[size ? size : "M"]}
        strokeWidth={2}
        color={colors["primary-700"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 200,
    backgroundColor: colors["primary-100"],
    borderWidth: 2,
    borderColor: colors['primary-700'],
    alignItems: "center",
    justifyContent: "center",
  },
});
