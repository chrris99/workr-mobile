import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { ForwardedRef, forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomModal } from "../base/modal/BottomModal";
import NewWorkoutTemplateStackNavigator from "../../navigation/TemplateStackNavigator";
import { spacing } from "../../design-system/spacing/spacing";
import { useNavigationState } from "@react-navigation/native";
import TemplateStackNavigator from "../../navigation/TemplateStackNavigator";
import { usePaginatedComponent } from "../../hooks/usePaginatedComponent";
import { Pagination } from "../base/Pagination";
import { Button } from "../base/Button";
import { Icon } from "../../design-system/icons/Icon";
import { ModalScreen } from "../base/modal/ModalScreen";

interface CreateTemplateModalProps {}

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    const { steps, currentStepIndex, isFirstStep, prev, next } =
      usePaginatedComponent([<Text>One</Text>, <Text>Two</Text>]);

    return (
      <BottomModal ref={ref}>
        <ModalScreen>
          <View style={styles.navigation}>
            <Button
              icon={
                <Icon
                  name="ArrowLeft"
                  color={isFirstStep ? "white" : "primary-700"}
                  strokeWidth={2}
                />
              }
              type="text"
              onPress={prev}
            />

            <Pagination
              currentStep={currentStepIndex + 1}
              steps={steps.length}
            />
            <Button
              icon={<Icon name="ArrowRight" strokeWidth={2} />}
              type="text"
              onPress={next}
            />
          </View>

          {steps[currentStepIndex]}
        </ModalScreen>
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
