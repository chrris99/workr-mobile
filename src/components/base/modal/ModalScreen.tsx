import { StyleSheet, View, ViewProps } from "react-native";
import { spacing } from "../../../design-system/spacing/spacing";
import { colors } from "../../../design-system/colors/colors";

type ModalScreenProps = ViewProps;

export const ModalScreen = (props: ModalScreenProps) => {
  return (
    <View {...props} style={[props.style, styles.container]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing["spacing-2"],
    paddingHorizontal: spacing["spacing-8"],
  },
});
