import { Input } from "@/components/base/input/Input";
import { TextAreaProps } from "@/components/base/input/text-area/types";
import { FieldValues } from "react-hook-form";

export const TextArea = <T extends FieldValues>({
  style,
  ...props
}: TextAreaProps<T>) => {
  return (
    <Input
      multiline
      numberOfLines={3}
      style={[
        style,
        { height: 92, textAlignVertical: "top", justifyContent: "flex-start" },
      ]}
      {...props}
    />
  );
};
