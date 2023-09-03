import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { ForwardedRef, forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomModal } from "../base/modal/BottomModal";
import { spacing } from "../../design-system/spacing/spacing";
import { usePaginatedComponent } from "../../hooks/usePaginatedComponent";
import { Pagination } from "../base/Pagination";
import { Button } from "../../design-system/buttons/Button";

interface CreateTemplateModalProps {}

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    const { steps, currentStepIndex, isFirstStep, prev, next } =
      usePaginatedComponent([<Text>One</Text>, <Text>Two</Text>]);

    return (
      <BottomModal
        ref={ref}
        title="Add plan"
        subtitle="Create a new workout plan from your workout templates and exercises"
      >
        <View style={styles.navigation}>
          <Button
            iconName="ArrowLeft"
            type={"primary-link-md"}
            onPress={prev}
          />

          <Pagination currentStep={currentStepIndex + 1} steps={steps.length} />
          <Button
            iconName="ArrowRight"
            type={"primary-link-md"}
            onPress={next}
          />
        </View>

        {steps[currentStepIndex]}
      </BottomModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: spacing["spacing-5"],
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing["spacing-1.5"],
  },
});
