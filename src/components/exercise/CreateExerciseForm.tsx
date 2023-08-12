import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { Input } from "../base/Input";
import { spacing } from "../../design-system/spacing/spacing";
import { Button } from "../base/Button";
import { useAuth } from "@clerk/clerk-expo";
import { createExercise } from "../../services/exerciseService";
import { useState } from "react";
import { Muscle } from "../../types/muscle";
import { tokenTemplate } from "../../constants/tokenTemplate";
import { Exercise } from "../../models/exercise";

interface CreateExerciseFormProps {
  onSuccess?: (newExercise: Exercise) => void;
}

export const CreateExerciseForm = ({ onSuccess }: CreateExerciseFormProps) => {
  const { getToken } = useAuth();

  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [targetMuscleGroup, setTargetMuscleGroup] = useState<string | "">("");
  const [targetMuscleGroupError, setTargetMuscleGroupError] = useState<
    string | undefined
  >(undefined);

  const onSubmit = async () => {
    setNameError(undefined);
    setTargetMuscleGroupError(undefined);

    if (name === "") setNameError("You must provide an exercise name");
    if (targetMuscleGroup === "")
      setTargetMuscleGroupError("You must provided a target muscle group");

    if (!nameError && !targetMuscleGroupError) {
      createExercise(
        {
          name,
          targetMuscleGroup,
        },
        (await getToken(tokenTemplate.default)) ?? ""
      )
        .then(async (exercise) => {
          if (onSuccess) onSuccess(exercise);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text type="body-L-bold">Create new exercise</Text>
        <Button
          title="Create exercise"
          onPress={onSubmit}
          type="solid"
          textStyle="body-XS-medium"
        />
      </View>
      <View style={styles.form}>
        <Input
          placeholder="Exercise name"
          label="Name"
          value={name}
          onChangeText={(name) => setName(name)}
          error={nameError}
          setError={setNameError}
        />
        <Input
          placeholder="Target muscle group"
          label="Target muscle group"
          value={targetMuscleGroup}
          error={targetMuscleGroupError}
          onChangeText={(muscle) => setTargetMuscleGroup(muscle)}
          setError={setTargetMuscleGroupError}
        />
        <Input placeholder="Description" label="Description" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing["spacing-4"],
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: spacing["spacing-8"],
  },
  form: {
    gap: spacing["spacing-4"],
  },
});
