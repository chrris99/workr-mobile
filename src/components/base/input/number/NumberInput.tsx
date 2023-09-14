import { StyleSheet, View } from "react-native";
import Text from "../../../../design-system/typography/Text";
import { NumberInputProps } from "../types";
import { Controller, FieldValues, useWatch } from "react-hook-form";
import { Button } from "../../../../design-system/buttons/Button";

export const NumberInput = <T extends FieldValues>({
  control,
  name,
  setValue,
  rules,
  error,
}: NumberInputProps<T>) => {
  const value = useWatch({ control, name });

  return (
    <View style={styles.container}>
      <Button
        type={"gray-icon-lg"}
        iconName={"Plus"}
        onPress={() => setValue(+value - 1)}
      />
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <Text type={"heading-M-semibold"}>{value}</Text>
        )}
        name={name}
      />
      <Button type={"gray-icon-lg"} iconName={"Plus"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
