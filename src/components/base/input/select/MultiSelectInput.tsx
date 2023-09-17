import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { SelectInputProps } from "./types";
import { spacing } from "../../../../design-system/spacing/spacing";
import { Controller, FieldValues } from "react-hook-form";
import { MultiSelectItem } from "./MultiSelectItem";

export const MultiSelectInput = <T extends FieldValues, V>({
  control,
  name,
  rules,
  error,
  options,
}: SelectInputProps<T, V>) => {
  const [selectedItems, setSelectedItems] = useState<V[]>([]);

  const renderMultiSelectOptions = (onChange: () => void) =>
    options.map((item, index) => (
      <MultiSelectItem
        key={index}
        onChange={onChange}
        item={item}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    ));

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <View style={styles.container}>
          {renderMultiSelectOptions(onChange)}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing["spacing-3"],
  },
});
