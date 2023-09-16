import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { SelectInputProps } from "./types";
import { SelectItem } from "./SelectItem";
import { spacing } from "../../../../design-system/spacing/spacing";
import { Controller, FieldValues } from "react-hook-form";

export const SelectInput = <T extends FieldValues>({
  control,
  name,
  rules,
  error,
  options,
  multiselect = false,
}: SelectInputProps<T>) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  const renderOptions = (onChange: () => void) =>
    multiselect
      ? renderMultiSelectOptions(onChange)
      : renderSingleSelectOptions(onChange);

  const renderSingleSelectOptions = (onChange: () => void) =>
    options.map((item, index) => (
      <SelectItem
        onChange={onChange}
        multiselect={false}
        item={{ id: index, ...item }}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    ));

  const renderMultiSelectOptions = (onChange: () => void) =>
    options.map((item, index) => (
      <SelectItem
        onChange={onChange}
        multiselect
        item={{ id: index, ...item }}
        selectedIndexes={selectedIndexes}
        setSelectedIndexes={setSelectedIndexes}
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
