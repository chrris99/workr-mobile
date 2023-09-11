import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { TextType } from "../../design-system/typography/fonts";
import { Color } from "../../design-system/colors/colors";
import { spacing } from "../../design-system/spacing/spacing";
import { Button } from "../../design-system/buttons/Button";

interface HeaderProps {
  title: string;
  subtitle: string;
  titleStyle?: TextType;
  titleColor?: Color;
  subtitleStyle?: TextType;
  subtitleColor?: Color;
}

export const Header = (props: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text
          type={props.titleStyle ?? "heading-S-semibold"}
          color={props.titleColor ?? "gray-900"}
        >
          {props.title}
        </Text>
      </View>

      <Text
        type={props.subtitleStyle ?? "body-M-regular"}
        color={props.subtitleColor ?? "gray-500"}
      >
        {props.subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: spacing["spacing-8"],
    gap: spacing["spacing-1"],
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlignVertical: "center",
  },
});
