import { WorkoutItem } from "@/components/workout/WorkoutItem";
import { BaseWorkoutTemplateFormProps } from "@/components/workout/forms/types";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { useFieldArray } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type WorkoutBlockProps = BaseWorkoutTemplateFormProps & {
  blockIndex: number;
};

export const WorkoutBlock = ({ control, blockIndex }: WorkoutBlockProps) => {
  const { fields: items, append } = useFieldArray({
    control,
    name: `blocks.${blockIndex}.items`,
  });

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <WorkoutItem
          control={control}
          item={item}
          itemIndex={index}
          blockIndex={blockIndex}
        />
      ))}
      <Button
        type={"primary-icon-md"}
        text="Add exercise to block"
        iconName="Plus"
        iconPosition="leading"
        onPress={() => append({ exerciseId: "", sets: [{}] })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: spacing["spacing-2"],
    borderWidth: 2,
    borderColor: colors["gray-300"],
    borderStyle: "dashed",
    padding: spacing["spacing-4"],
  },
});
