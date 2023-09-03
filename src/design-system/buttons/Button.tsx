import {
  BaseButton,
  BaseButtonProps,
  BorderlessButton,
  RectButton,
  RectButtonProps,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { ButtonType, buttons } from "./buttons";
import { IconName } from "../icons/icons";
import Text from "../typography/Text";
import { Icon } from "../icons/Icon";
import { StyleSheet, TouchableHighlightProps, View } from "react-native";
import { GenericTouchableProps } from "react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable";
import { spacing } from "../spacing/spacing";

type IconPosition = "leading" | "trailing";

interface ButtonProps extends BaseButtonProps {
  type: ButtonType;
  text?: string;
  iconName?: IconName;
  iconPosition?: IconPosition;
}

export const Button = (props: ButtonProps) => {
  const { type, text, iconName, iconPosition = "trailing" } = props;
  const buttonStyles = buttons[type];

  const renderChildren = () => (
    <View style={styles.container}>
      {iconName && iconPosition === "leading" && (
        <Icon
          name={iconName}
          size={buttonStyles.iconSize}
          color={buttonStyles.textColor}
        />
      )}
      {text && (
        <Text type={buttonStyles.textType} color={buttonStyles.textColor}>
          {text}
        </Text>
      )}
      {iconName && iconPosition === "trailing" && (
        <Icon
          name={iconName}
          size={buttonStyles.iconSize}
          color={buttonStyles.textColor}
        />
      )}
    </View>
  );

  if (type.includes("link"))
    return <BorderlessButton {...props}>{renderChildren()}</BorderlessButton>;

  return (
    <RectButton
      style={[
        buttonStyles.containerStyle,
        { borderRadius: spacing["spacing-2"] },
      ]}
      activeOpacity={0.8}
      underlayColor={buttonStyles.containerHighlightColor}
      {...props}
    >
      {renderChildren()}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing["spacing-2"],
  },
});
