import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import Text from "../../design-system/typography/Text";
import { Color, colors } from "../../design-system/colors/colors";
import { spacing } from "../../design-system/spacing/spacing";
import { TextType } from "../../design-system/typography/fonts";

type ButtonType = "solid" | "outline" | "text";

interface BaseButtonProps extends TouchableOpacityProps {
  title?: string;
  type: ButtonType;
  textStyle?: TextType;
  icon?: JSX.Element;
}

interface SolidButtonProps extends BaseButtonProps {
  type: "solid";
  backgroundColor?: Color;
  textColor?: Color;
}

interface OutlineButtonProps extends BaseButtonProps {
  type: "outline";
  textColor?: Color;
}

interface TextButtonProps extends BaseButtonProps {
  type: "text";
  textColor?: Color;
}

type ButtonProps = SolidButtonProps | OutlineButtonProps | TextButtonProps;

function getButtonStyle(props: ButtonProps): StyleProp<ViewStyle> {
  const baseButtonStyle = {
    borderRadius: 8,
    paddingVertical: spacing["spacing-2.5"],
    paddingHorizontal: spacing["spacing-4"],
  };

  if (props.type === "solid") {
    return {
      ...baseButtonStyle,
      backgroundColor: props.backgroundColor
        ? colors[props.backgroundColor]
        : colors["primary-700"],
    };
  }

  if (props.type === "outline") {
    return {
      ...baseButtonStyle,
      backgroundColor: colors["white"],
      borderWidth: 1,
      borderColor: colors["gray-300"],
    };
  }
}

export const Button = (props: ButtonProps) => {
  const buttonStyle = getButtonStyle(props);

  return (
    <TouchableOpacity {...props} activeOpacity={0.9} style={buttonStyle}>
      <View style={styles.container}>
        {props.icon && props.icon}
        <Text
          type={props.textStyle ? props.textStyle : "body-M-semibold"}
          color={
            props.textColor
              ? props.textColor
              : props.type === "solid"
              ? "white"
              : "gray-900"
          }
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing["spacing-3"],
  },
  button: {},
});
