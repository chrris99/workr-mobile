import { Input } from "@/components/base/input/Input";
import { BottomSheetInputProps } from "@/components/base/input/types";
import { useBottomSheetInternal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { FieldValues } from "react-hook-form";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export const BottomSheetInput = <T extends FieldValues>(
  props: BottomSheetInputProps<T>
) => {
  const { shouldHandleKeyboardEvents } = useBottomSheetInternal();

  const handleOnFocus = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      shouldHandleKeyboardEvents.value = true;
      if (props.onFocus) {
        props.onFocus(args);
      }
    },
    [props.onFocus, shouldHandleKeyboardEvents]
  );

  const handleOnBlur = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      shouldHandleKeyboardEvents.value = false;
      if (props.onBlur) {
        props.onBlur(args);
      }
    },
    [props.onBlur, shouldHandleKeyboardEvents]
  );

  return <Input {...props} onFocus={handleOnFocus} onBlur={handleOnBlur} />;
};
