import { MultiSelectItem } from "@/components/base/input/select/MultiSelectItem";
import { SelectInputProps } from "@/components/base/input/select/types";
import { spacing } from "@/design-system/spacing/spacing";
import { useEffect, useState } from "react";
import { Controller, FieldValues, useWatch } from "react-hook-form";
import { StyleSheet, View } from "react-native";

export const MultiSelectInput = <T extends FieldValues, V>({
  control,
  name,
  rules,
  error,
  options,
}: SelectInputProps<T, V>) => {
  const [selectedItems, setSelectedItems] = useState<V[]>([]);

  const value = useWatch({ control, name });

  useEffect(() => {
    value && setSelectedItems(value);
  }, [value]);

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
