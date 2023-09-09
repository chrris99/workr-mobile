import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";
import { spacing } from "../design-system/spacing/spacing";
import { useCallback, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CreateExerciseModal } from "../components/exercise/CreateExerciseModal";
import { ExerciseList } from "../components/exercise/ExerciseList";
import { Input } from "../components/base/input/Input";
import { useGetExercisesQuery } from "../api/api";
import { Button } from "../design-system/buttons/Button";
import { FeaturedIcon } from "../design-system/icons/FeaturedIcon";

const ExerciseScreen = () => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { data } = useGetExercisesQuery();

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text type={"body-M-semibold"} style={styles.heading}>
        Your Exercises
      </Text>

      <View style={styles.contentContainer}>
        {data && data.length > 0 ? (
          <>
            <ExerciseList exercises={data} />
            <View style={styles.addButton}>
              <Button
                text="Add Exercise"
                type={"primary-solid-lg"}
                onPress={openModal}
              />
            </View>
          </>
        ) : (
          <View style={styles.emptyStateContainer}>
            <FeaturedIcon
              iconName="Search"
              color={"gray-700"}
              strokeWidth={2}
            />
            <Text type={"body-L-semibold"} style={styles.emptyStateTitle}>
              No exercises found
            </Text>
            <View style={styles.emptyStateButtonContainer}>
              <Button text="Clear search" type={"gray-solid-lg"} />
              <Button
                text="New exercise"
                type={"primary-solid-lg"}
                onPress={openModal}
              />
            </View>
          </View>
        )}
      </View>

      <CreateExerciseModal
        ref={bottomSheetRef}
        onSuccess={() => bottomSheetRef.current?.dismiss()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-4"],
  },
  emptyStateContainer: {
    display: "flex",
    alignItems: "center",
  },
  emptyStateTitle: {
    paddingTop: spacing["spacing-4"],
  },
  emptyStateButtonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: spacing["spacing-3"],
    paddingTop: spacing["spacing-8"],
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    textAlign: "center",
    paddingBottom: spacing["spacing-4"],
  },
  exerciseList: {
    paddingBottom: spacing["spacing-5"],
  },
  addButton: {
    paddingBottom: spacing["spacing-5"],
  },
});

export default ExerciseScreen;
