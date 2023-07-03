import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";
import { spacing } from "../design-system/spacing/spacing";
import { Button } from "../components/base/Button";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Input } from "../components/base/Input";
import { CreateExerciseForm } from "../components/exercise/CreateExerciseForm";
import { Exercise } from "../models/exercise";
import { getExercises } from "../services/exerciseService";
import { useAuth } from "@clerk/clerk-expo";

const ExerciseScreen = () => {
  const insets = useSafeAreaInsets();
  const { getToken } = useAuth();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    getToken().then((token) => {
      if (token)
        getExercises(token)
          .then((exercises) => {
            console.log(exercises)
            console.log(exercises.body);
            setExercises(exercises.body);
          })
          .catch((err) => console.error(err));
    });
  }, []);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.exerciseList}>
        <FlatList
          data={exercises}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
      <Input placeholder="Hello" />
      <Button title="Add Exercise" type="solid" onPress={openModal} />
      <BottomSheetModal
        ref={bottomSheetRef}
        index={2}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <CreateExerciseForm />
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exerciseList: {
    paddingBottom: spacing["spacing-5"],
  },
});

export default ExerciseScreen;
