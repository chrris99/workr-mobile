import { FieldValues } from "react-hook-form";
import { TextAreaProps } from "./types";
import { Input } from "./Input";

export const TextArea = <T extends FieldValues>({
  style,
  ...props
}: TextAreaProps<T>) => {
  return (
    <Input
      multiline
      numberOfLines={4}
      maxLength={116}
      style={[style, { height: 100, textAlignVertical: "top", justifyContent: 'flex-start' }]}
      {...props}
    />
  );
};
