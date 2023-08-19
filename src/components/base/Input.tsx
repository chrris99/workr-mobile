import { TextInputProps } from "react-native/types";
import { TextInput, StyleSheet, View } from "react-native";
import { spacing } from "../../design-system/spacing/spacing";
import { TextType, fonts } from "../../design-system/typography/fonts";
import Text from "../../design-system/typography/Text";
import { colors } from "../../design-system/colors/colors";
import Error from "../../../assets/icons/xmark-circle.svg";
import { useState } from "react";

interface InputProps extends TextInputProps {
  type?: TextType;
  icon?: string;
  label?: string;
  error?: string;
  setError?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {props.label && <Text type="body-S-medium">{props.label}</Text>}
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: props.error
              ? colors["error-300"]
              : isFocused
              ? colors["primary-700"]
              : colors["gray-300"],
          },
        ]}
      >
        <View style={styles.contentContainer}>
          <TextInput
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            selectionColor={colors["primary-700"]}
            style={[
              props.style,
              fonts[props.type || "body-M-regular"],
              { flex: 1 },
            ]}
          />
          {props.error && (
            <Error
              height={16}
              width={16}
              color={colors["error-500"]}
              strokeWidth={1.5}
            />
          )}
        </View>
      </View>
      {props.error && (
        <Text type="body-S-regular" color={"error-500"}>
          {props.error}
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
