import { TextArea } from "@/components/base/input/text-area/TextArea";
import { BottomSheetTextAreaProps } from "@/components/base/input/text-area/types";
import { useBottomSheetInternal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { FieldValues } from "react-hook-form";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export const BottomSheetTextArea = <T extends FieldValues>(
  props: BottomSheetTextAreaProps<T>
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

  return <TextArea {...props} onFocus={handleOnFocus} onBlur={handleOnBlur} />;
};
