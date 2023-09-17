import { Color, colors } from "@/design-system/colors/colors";
import { TextType, fonts } from "@/design-system/typography/fonts";
import { Text as T, TextProps as TP } from "react-native";

interface TextProps extends TP {
  type?: TextType;
  color?: Color;
}

const Text = (props: TextProps) => {
  return (
    <T
      {...props}
      style={[
        props.style,
        fonts[props.type || "body-S-regular"],
        { color: colors[props.color || "gray-900"] },
      ]}
    >
      {props.children}
    </T>
  );
};

export default Text;
