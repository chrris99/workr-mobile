import { TextInputProps } from "react-native/types";
import { TextInput, StyleSheet, View } from "react-native";
import { spacing } from "../../design-system/spacing/spacing";
import { TextType, fonts } from "../../design-system/typography/fonts";
import Text from '../../design-system/typography/Text'
import { colors } from "../../design-system/colors/colors";

interface InputProps extends TextInputProps {
  type?: TextType
  icon?: string
  label?: string
}

export const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      {props.label && <Text type="body-S-medium">{props.label}</Text>}
      <View style={styles.inputContainer}>
        <View style={styles.contentContainer}>
          <TextInput {...props} style={[props.style, fonts[props.type || 'body-M-regular']]} />
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing['spacing-1.5']
  },
  inputContainer: {
    paddingVertical: spacing['spacing-2.5'],
    paddingHorizontal: spacing['spacing-3.5'],
    borderColor: colors['gray-300'],
    borderWidth: 1,
    borderRadius: 8
  },
  contentContainer: {
    gap: spacing['spacing-2']
  },
});
