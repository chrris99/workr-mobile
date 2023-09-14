import { FieldValues } from "react-hook-form";
import { BottomSheetTextAreaProps } from "./types";
import { useBottomSheetInternal } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { TextArea } from "./TextArea";

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
  