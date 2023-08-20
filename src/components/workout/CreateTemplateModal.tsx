import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { ForwardedRef, forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomModal } from "../base/modal/BottomModal";
import NewWorkoutTemplateStackNavigator from "../../navigation/NewWorkoutTemplateStackNavigator";
import { spacing } from "../../design-system/spacing/spacing";

interface CreateTemplateModalProps {}

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    return (
      <BottomModal ref={ref}>
        <NewWorkoutTemplateStackNavigator />
      </BottomModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: spacing["spacing-5"],
  },
});
