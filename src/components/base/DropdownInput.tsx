import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Text from "../../design-system/typography/Text";
import { DropdownItem, DropdownValue } from "./dropdown/DropdownItem";
import { spacing } from "../../design-system/spacing/spacing";
import { useState } from "react";
import { colors } from "../../design-system/colors/colors";

interface DropdownInputProps<T, V> {
  data: T[];
  selectedValue: V;
  setSelectedValue: (v: V) => void;
  placeholder?: string;
  searchPlaceholder?: string;
}

export const DropdownInput = <
  V extends DropdownValue,
  T extends DropdownItem<V>
>({
  data,
  selectedValue,
  setSelectedValue,
}: DropdownInputProps<T, V>) => {
  const [isFocus, setIsFocus] = useState(false);

  const borderColorStyle = {
    borderColor: isFocus ? colors["primary-300"] : colors["gray-300"],
  };

  return (
    <Dropdown<T>
      style={[styles.dropdown, borderColorStyle]}
      containerStyle={styles.dropdownContainer}
      data={data}
      renderItem={(item) => (
        <DropdownItem item={item} isSelected={item.value === selectedValue} />
      )}
      labelField={"label"}
      valueField={"value"}
      value={selectedValue}
      onFocus={() => setIsFocus(true)}
      onChange={(item) => {
        setIsFocus(false);
        setSelectedValue(item.value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: spacing["spacing-2.5"],
    paddingHorizontal: spacing["spacing-3.5"],
    borderRadius: spacing["spacing-2"],
    borderWidth: 1,
  },
  dropdownContainer: {
    borderRadius: spacing['spacing-2'] 
  }
});
