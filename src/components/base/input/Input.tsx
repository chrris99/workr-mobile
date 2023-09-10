import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native/types";
import { TextInput, StyleSheet, View } from "react-native";
import { spacing } from "../../../design-system/spacing/spacing";
import { fonts } from "../../../design-system/typography/fonts";
import Text from "../../../design-system/typography/Text";
import { colors } from "../../../design-system/colors/colors";
import { useCallback, useState } from "react";
import { Icon } from "../../../design-system/icons/Icon";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { useBottomSheetInternal } from "@gorhom/bottom-sheet";

export interface InputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
  error?: FieldError;
  icon?: string;
  label?: string;
  placeholder?: string;
}

export const Input = <T extends FieldValues>({
  control,
  name,
  rules,
  error,
  label,
  placeholder,
  ...props
}: InputProps<T>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { shouldHandleKeyboardEvents } = useBottomSheetInternal();

  const handleOnFocus = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      shouldHandleKeyboardEvents.value = true;
      if (props.onFocus) {
        props.onFocus(args);
      }
    },
    [props.onFocus, shouldHandleKeyboardEvents]
  );

  const handleOnBlur = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      shouldHandleKeyboardEvents.value = false;
      if (props.onBlur) {
        props.onBlur(args);
      }
    },
    [props.onBlur, shouldHandleKeyboardEvents]
  );

  return (
    <View style={styles.container}>
      {label && <Text type="body-S-medium">{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? colors["error-300"]
              : isFocused
              ? colors["primary-700"]
              : colors["gray-300"],
          },
        ]}
      >
        <View style={styles.contentContainer}>
          <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                {...props}
                placeholder={placeholder}
                onChangeText={onChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                value={value}
                selectionColor={colors["primary-700"]}
                style={[fonts["body-M-regular"], { flex: 1 }]}
              />
            )}
            name={name}
          />
          {error && (
            <Icon name="Error" color={"error-500"} size="S" strokeWidth={1.5} />
          )}
        </View>
      </View>
      {error && (
        <Text type="body-S-regular" color={"error-500"}>
          {error.message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing["spacing-1.5"],
  },
  inputContainer: {
    paddingVertical: spacing["spacing-2.5"],
    paddingHorizontal: spacing["spacing-3.5"],
    borderWidth: 1,
    borderRadius: 8,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing["spacing-2"],
  },
});