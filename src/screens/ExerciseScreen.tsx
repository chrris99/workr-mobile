import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";
import { spacing } from "../design-system/spacing/spacing";
import { useCallback, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CreateExerciseModal } from "../components/exercise/modals/CreateExerciseModal";
import { ExerciseList } from "../components/exercise/ExerciseList";
import { useGetExercisesQuery } from "../api/api";
import { Button } from "../design-system/buttons/Button";
import { FeaturedIcon } from "../design-system/icons/FeaturedIcon";
import { Header } from "../components/base/Header";
import { Input } from "../components/base/input/Input";

const ExerciseScreen = () => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { data } = useGetExercisesQuery();

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  // TODO: Have uncontrolled inputs

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title="Exercises"
        subtitle="View all exercises created by you or your trainer"
        rightComponent={
          <Button
            type={"primary-link-2xl"}
            text="Add"
            iconName="Plus"
            iconPosition="leading"
            onPress={openModal}
          />
        }
      />

      <View style={styles.contentContainer}>
        {data && data.length > 0 ? (
          <ExerciseList exercises={data} />
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

      <CreateExerciseModal ref={bottomSheetRef} />
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
  }
});

export default ExerciseScreen;
