import { SingleSelectItem } from "@/components/base/input/select/SingleSelectItem";
import { SelectInputProps } from "@/components/base/input/select/types";
import { spacing } from "@/design-system/spacing/spacing";
import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { StyleSheet, View } from "react-native";

export const SelectInput = <T extends FieldValues, V>({
  control,
  name,
  rules,
  error,
  options,
}: SelectInputProps<T, V>) => {
  const [selectedItem, setSelectedItem] = useState<V>(options[0].value);

  const renderOptions = (onChange: () => void) =>
    options.map((item, index) => (
      <SingleSelectItem
        key={index}
        onChange={onChange}
        item={item}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    ));

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>{renderOptions(onChange)}</View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing["spacing-3"],
  },
});
