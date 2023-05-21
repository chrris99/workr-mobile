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

// TODO: Create text button type

type ButtonType = "solid" | "outline";

interface BaseButtonProps extends TouchableOpacityProps {
  title: string;
  type: ButtonType;
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

type ButtonProps = SolidButtonProps | OutlineButtonProps;

function getButtonStyle(props: ButtonProps): StyleProp<ViewStyle> {
  if (props.type === "solid") {
    return {
      backgroundColor: props.backgroundColor
        ? colors[props.backgroundColor]
        : colors["primary-700"],
    };
  }

  if (props.type === "outline") {
    return {
      backgroundColor: colors["white"],
      borderWidth: 1,
      borderColor: colors["gray-300"],
    };
  }
}

export const Button = (props: ButtonProps) => {
  const buttonStyle = getButtonStyle(props);

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.9}
      style={[styles.button, buttonStyle]}
    >
      <View style={styles.container}>
        {props.icon && props.icon}
        <Text
          type={"body-M-semibold"}
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
  button: {
    borderRadius: 8,
    paddingVertical: spacing["spacing-2.5"],
    paddingHorizontal: spacing["spacing-4"],
  },
});
