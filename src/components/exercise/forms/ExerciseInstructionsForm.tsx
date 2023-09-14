import { FieldArrayWithId, useFieldArray, useFormState } from "react-hook-form";
import { BaseExerciseFormProps, ExerciseFormValues } from "./types";
import { Animated, StyleSheet, View } from "react-native";
import { spacing } from "../../../design-system/spacing/spacing";
import React, { useEffect, useRef } from "react";
import { Button } from "../../../design-system/buttons/Button";
import { BottomSheetTextArea } from "../../base/input/BottomSheetTextArea";
import { Swipeable } from "react-native-gesture-handler";

const AnimatedView = Animated.createAnimatedComponent(View);

export const ExerciseInstructionsForm = ({
  control,
}: BaseExerciseFormProps) => {
  const swipeableRef = useRef<Swipeable>(null);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructions",
  });

  const renderRightActions = (
    index: number,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.actionContainer}>
        <AnimatedView style={{ transform: [{ scale }] }} />

        <Button
          type={"secondary-icon-sm"}
          iconName="Trash"
          onPress={() => {
            swipeableRef.current?.close();
            remove(index);
          }}
        />
      </View>
    );
  };

  // TODO: Consider simply passing down the errors object
  const { errors } = useFormState({
    control,
  });

  const renderInstructionInput = (
    field: FieldArrayWithId<ExerciseFormValues, "instructions", "id">,
    index: number
  ) => (
    <Swipeable
      key={index}
      ref={swipeableRef}
      renderRightActions={(dragX) => renderRightActions(index, dragX)}
    >
      <BottomSheetTextArea
        key={field.id}
        control={control}
        name={`instructions.${index}.description`}
        error={errors.instructions?.root}
        label={`Step ${index + 1}`}
      />
    </Swipeable>
  );

  return (
    <View style={styles.form}>
      {fields.map((field, index) => renderInstructionInput(field, index))}
      <Button
        text="Add step"
        type={"primary-solid-lg"}
        onPress={() => append({ description: "" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: spacing["spacing-4"],
    paddingBottom: spacing["spacing-7"],
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing["spacing-5"],
  },
});
