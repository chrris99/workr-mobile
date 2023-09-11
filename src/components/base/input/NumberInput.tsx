import { StyleSheet, View } from "react-native";
import Text from "../../../design-system/typography/Text";
import { NumberInputProps } from "./types";
import { FieldValues } from "react-hook-form";

export const NumberInput = <T extends FieldValues>(
  props: NumberInputProps<T>
) => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
