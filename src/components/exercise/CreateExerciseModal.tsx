import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { Input } from "../base/Input";
import { spacing } from "../../design-system/spacing/spacing";
import { ForwardedRef, forwardRef, useState } from "react";
import { BottomModal } from "../base/modal/BottomModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Muscle, muscles } from "../../types/muscle";
import { ModalScreen } from "../base/modal/ModalScreen";
import { DropdownInput } from "../base/dropdown/DropdownInput";
import { useAddExerciseMutation } from "../../api/api";
import { Button } from "../../design-system/buttons/Button";

interface CreateExerciseModalProps {
  onSuccess: () => void;
}

export const CreateExerciseModal = forwardRef(
  (
    { onSuccess }: CreateExerciseModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => { 
    const [name, setName] = useState<string>("");
    const [nameError, setNameError] = useState<string | undefined>(undefined);
    const [targetMuscleGroup, setTargetMuscleGroup] = useState<Muscle | "">("");
    const [targetMuscleGroupError, setTargetMuscleGroupError] = useState<
      string | undefined
    >(undefined);

    const [addExercise, res] = useAddExerciseMutation();

    const onSubmit = async () => {
      setNameError(undefined);
      setTargetMuscleGroupError(undefined);

      if (name === "") setNameError("You must provide an exercise name");
      if (targetMuscleGroup === "")
        setTargetMuscleGroupError("You must provided a target muscle group");

      if (!nameError && !targetMuscleGroupError) {
        await addExercise({ name, targetMuscleGroup })
          .unwrap()
          .then((payload) => console.log(payload))
          .catch((err) => console.error(err));

        onSuccess();
      }
    };

    return (
      <BottomModal ref={ref}>
        <ModalScreen>
          <View style={styles.header}>
            <Text type="body-L-bold">Create new exercise</Text>
            <Button
              text="Create exercise"
              onPress={onSubmit}
              type={'primary-solid-md'}
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
            <DropdownInput
              label={"Target muscle group"}
              data={[...muscles].map((muscle) => ({
                value: muscle,
                label: muscle.charAt(0).toUpperCase() + muscle.slice(1),
              }))}
              selectedValue={targetMuscleGroup}
              setSelectedValue={setTargetMuscleGroup}
              placeholder="Select target muscle group"
            />
            <Input placeholder="Description" label="Description" />
          </View>
        </ModalScreen>
      </BottomModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: spacing["spacing-8"],
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
