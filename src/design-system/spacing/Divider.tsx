import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Text from "../typography/Text";
import { Color, colors } from "../colors/colors";
import { spacing } from "./spacing";

interface DividerProps {
  color?: Color;
  text?: string;
}

export const Divider = ({ color, text }: DividerProps) => {
  const lineStyle: StyleProp<ViewStyle> = {
    ...styles.line,
    backgroundColor: color ? colors[color] : colors["gray-300"],
  };

  return (
    <View style={styles.container}>
      <View style={lineStyle} />
      <View>
        <Text type="body-S-regular" color="gray-500" style={styles.text}>
          {text}
        </Text>
      </View>
      <View style={lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    flex: 1,
    height: 1,
  },
  text: {
    paddingHorizontal: spacing["spacing-2"],
  },
});
