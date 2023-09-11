import {
  BaseButtonProps,
  BorderlessButton,
  RectButton
} from "react-native-gesture-handler";
import { ButtonType, buttons } from "./buttons";
import { IconName } from "../icons/icons";
import Text from "../typography/Text";
import { Icon } from "../icons/Icon";
import { StyleSheet, View } from "react-native";
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
    <View style={styles.contentContainer}>
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
    return (
      <BorderlessButton
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        {...props}
      >
        {renderChildren()}
      </BorderlessButton>
    );

  return (
    <RectButton
      style={[buttonStyles.containerStyle, styles.button]}
      activeOpacity={0.8}
      underlayColor={buttonStyles.containerHighlightColor}
      {...props}
    >
      {renderChildren()}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: spacing["spacing-2"],
    flexGrow: 1
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing["spacing-2"],
  },
});
