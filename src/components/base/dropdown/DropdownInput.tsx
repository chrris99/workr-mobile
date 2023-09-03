import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Text from "../../../design-system/typography/Text";
import { DropdownItem, DropdownValue } from "./DropdownItem";
import { spacing } from "../../../design-system/spacing/spacing";
import { useState } from "react";
import { colors } from "../../../design-system/colors/colors";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { Icon } from "../../../design-system/icons/Icon";

interface DropdownInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
  error?: FieldError;
  data: DropdownItem[];
  label?: string;
  placeholder?: string;
  searchPlaceholder?: string;
}

export const DropdownInput = <T extends FieldValues>({
  control,
  name,
  rules,
  error,
  data,
  label,
  placeholder,
}: DropdownInputProps<T>) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  // TODO: Move selected value state here

  const borderColorStyle = {
    borderColor: isFocus ? colors["primary-700"] : colors["gray-300"],
  };

  return (
    <View style={styles.container}>
      {label && <Text type="body-S-medium">{label}</Text>}
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Dropdown
            style={[styles.dropdown, borderColorStyle]}
            containerStyle={styles.dropdownContainer}
            data={data}
            renderItem={(item) => (
              <DropdownItem
                item={item}
                isSelected={item.value === selectedValue}
              />
            )}
            labelField={"label"}
            valueField={"value"}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setIsFocus(false);
              setSelectedValue(item.value);
              onChange(item.value);
            }}
            placeholder={placeholder ?? "Select item"}
            autoScroll={false}
            renderRightIcon={() => (
              <Icon
                name={isFocus ? "ChevronUp" : "ChevronDown"}
                color="gray-500"
              />
            )}
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
});
