import {
  NativeSyntheticEvent,
  TextInputFocusEventData
} from "react-native";
import { Input } from "./Input";
import { FieldValues } from "react-hook-form";
import { useBottomSheetInternal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { BottomSheetInputProps } from "./types";

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
