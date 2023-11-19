import { Header } from "@/components/base/Header";
import { WorkoutTemplateList } from "@/components/workout/WorkoutTemplate/WorkoutTemplateList";
import { CreateTemplateModal } from "@/components/workout/modals/CreateTemplateModal";
import { Button } from "@/design-system/buttons/Button";
import {
  BASE_HORIZONTAL_GUTTER,
  spacing,
} from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const WorkoutScreen = () => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Header
        title="Workout"
        subtitle="See your workout templates and active workouts all in one place"
      />

      <View style={styles.workoutTemplatesTitle}>
        <Text type={"body-L-semibold"}>Workout Templates</Text>
        <Button
          type={"primary-link-2xl"}
          text="Add"
          iconName="Plus"
          onPress={openModal}
        />
      </View>

      <View style={styles.workoutTemplates}>
        <WorkoutTemplateList />
      </View>

      <CreateTemplateModal ref={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: BASE_HORIZONTAL_GUTTER,
  },
  workoutTemplatesTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  workoutTemplates: {
    marginTop: spacing["spacing-4"],
  },
});
