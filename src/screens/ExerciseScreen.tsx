import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";
import { spacing } from "../design-system/spacing/spacing";
import { Button } from "../components/base/Button";
import { useCallback, useEffect, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CreateExerciseModal } from "../components/exercise/CreateExerciseModal";
import { Exercise } from "../models/exercise";
import { getExercises } from "../services/exerciseService";
import { useAuth } from "@clerk/clerk-expo";
import { ExerciseTable } from "../components/exercise/ExerciseTable";
import { Input } from "../components/base/Input";
import { colors } from "../design-system/colors/colors";
import { DropdownInput } from "../components/base/dropdown/DropdownInput";

const ExerciseScreen = () => {
  const insets = useSafeAreaInsets();
  const { getToken } = useAuth();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const onExerciseCreated = (newExercise: Exercise) => {
    bottomSheetRef.current?.dismiss();
    console.log(newExercise);
    setExercises((exercises) => [...exercises, newExercise]);
    console.log(exercises.map((exercise) => exercise.name));
  };

  useEffect(() => {
    getToken().then((token) => {
      if (token)
        getExercises(token)
          .then((exercises) => setExercises(exercises))
          .catch((err) => console.error(err));
    });
  }, []);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.filter}>
        <Text type={"body-M-semibold"} style={styles.heading}>
          Your Exercises
        </Text>
        <Input placeholder="Search" />
      </View>

      <ExerciseTable exercises={exercises} />

      <View style={styles.addButton}>
        <Button title="Add Exercise" type="solid" onPress={openModal} />
      </View>
      <CreateExerciseModal ref={bottomSheetRef} onSuccess={onExerciseCreated} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-4"],
    backgroundColor: colors["white"],
  },
  heading: {
    textAlign: "center",
    paddingBottom: spacing["spacing-4"],
  },
  filter: {
    paddingVertical: spacing["spacing-8"],
  },
  exerciseList: {
    paddingBottom: spacing["spacing-5"],
  },
  addButton: {
    paddingBottom: spacing["spacing-5"],
  },
});

export default ExerciseScreen;
