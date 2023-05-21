import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { TextType } from "../../design-system/typography/fonts";
import { Color } from "../../design-system/colors/colors";
import { spacing } from "../../design-system/spacing/spacing";

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
      <Text
        type={props.titleStyle ?? "heading-XS-semibold"}
        color={props.titleColor ?? "gray-900"}
      >
        {props.title}
      </Text>
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
    gap: spacing['spacing-2']
  }
})