import { Header } from "@/components/base/Header";
import { WorkoutTemplateList } from "@/components/workout/WorkoutTemplate/WorkoutTemplateList";
import { CreateTemplateModal } from "@/components/workout/modals/CreateTemplateModal";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PlanScreen = () => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    console.log("hello");
    bottomSheetRef.current?.present();
  }, []);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title="Plan"
        subtitle="Your current personalised workout plan created by your trainer"
      />

      <WorkoutTemplateList />
      <Button
        text="Create Plan"
        type={"primary-solid-md"}
        onPress={openModal}
      />
      <CreateTemplateModal ref={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
  },
});

export default PlanScreen;
