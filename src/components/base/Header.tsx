import { View } from "react-native";
import Text from "../../design-system/typography/Text";
import { TextType } from "../../design-system/typography/fonts";
import { Color } from "../../design-system/colors/colors";

interface HeaderProps {
  title: string;
  subtitle: string;
  titleStyle?: TextType;
  titleColor?: Color;
  subtitleStyle?: TextType;
  subtitleColor?: Color;
}

const Header = (props: HeaderProps) => {
  return (
    <View>
      <Text
        type={props.titleStyle ?? "heading-XS-semibold"}
        color={props.titleColor}
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
