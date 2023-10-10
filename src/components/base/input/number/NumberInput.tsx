import { NumberInputProps } from "@/components/base/input/types";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { Controller, FieldValues } from "react-hook-form";
import { StyleSheet, View } from "react-native";

// TODO: Make limits configurable (move this task to form valdiation)
// TODO: Make step configurable
// TODO: Make text editable

export const NumberInput = <T extends FieldValues>({
  control,
  name,
  rules,
  label,
}: NumberInputProps<T>) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <Button
              enabled={+value > 1}
              type={"gray-icon-lg"}
              iconName={"Minus"}
              onPress={() => onChange(+value - 1)}
            />
            <Text type={"heading-L-semibold"} style={styles.value}>
              {value}
            </Text>
            <Button
              enabled={+value < 7}
              type={"gray-icon-lg"}
              iconName={"Plus"}
              onPress={() => onChange(+value + 1)}
            />
          </View>
        )}
        name={name}
      />
      {label && (
        <Text type="body-S-medium" style={styles.label}>
          {label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing["spacing-3"],
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing["spacing-3"],
  },
  value: {
    width: 30,
    textAlign: "center",
    marginBottom: -7,
  },
  label: {
    textAlign: "center",
  },
});
