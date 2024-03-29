import { DropdownItem } from "@/components/base/input/dropdown/DropdownItem";
import { DropdownInputProps } from "@/components/base/input/dropdown/types";
import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";

export const MultiSelectDropdownInput = <T extends FieldValues>({
  control,
  name,
  rules,
  error,
  data,
  label,
  placeholder,
}: DropdownInputProps<T>) => {
  const [isFocus, setIsFocus] = useState(false);

  const borderColorStyle = {
    borderColor: isFocus ? colors["primary-700"] : colors["gray-300"],
  };

  return (
    <View style={styles.container}>
      {label && <Text type="body-S-medium">{label}</Text>}
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <MultiSelect
            style={[styles.dropdown, borderColorStyle]}
            containerStyle={styles.dropdownContainer}
            data={data}
            renderItem={(item, selected) => (
              <DropdownItem item={item} isSelected={selected ?? false} />
            )}
            itemContainerStyle={styles.itemContainer}
            labelField={"label"}
            valueField={"value"}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => {
              onBlur();
              setIsFocus(false);
            }}
            onChange={(values) => {
              setIsFocus(false);
              onChange(values);
            }}
            placeholder={placeholder ?? "Select item"}
            renderRightIcon={() => (
              <Icon
                name={isFocus ? "ChevronUp" : "ChevronDown"}
                color="gray-500"
              />
            )}
            showsVerticalScrollIndicator={false}
            inverted={false}
            dropdownPosition={"top"}
            alwaysRenderSelectedItem
          />
        )}
        name={name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing["spacing-1.5"],
  },
  dropdown: {
    paddingVertical: spacing["spacing-1.5"],
    paddingHorizontal: spacing["spacing-3.5"],
    borderRadius: spacing["spacing-2"],
    borderWidth: 1,
  },
  dropdownContainer: {
    borderRadius: spacing["spacing-2"],
  },
  itemContainer: {
    borderRadius: spacing["spacing-2"],
  },
});
