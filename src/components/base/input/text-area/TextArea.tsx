import { FieldValues } from "react-hook-form";
import { TextAreaProps } from "../types";
import { Input } from "../Input";

export const TextArea = <T extends FieldValues>({
  style,
  ...props
}: TextAreaProps<T>) => {
  return (
    <Input
      multiline
      numberOfLines={3}
      style={[style, { height: 92, textAlignVertical: "top", justifyContent: 'flex-start' }]}
      {...props}
    />
  );
};
