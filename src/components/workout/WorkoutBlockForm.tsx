import { WorkoutItemForm } from "@/components/workout/WorkoutItemForm";
import { BaseWorkoutTemplateFormProps } from "@/components/workout/forms/types";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { useFieldArray } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type WorkoutBlockProps = BaseWorkoutTemplateFormProps & {
  blockIndex: number;
};

export const WorkoutBlockForm = ({
  control,
  blockIndex,
}: WorkoutBlockProps) => {
  const { fields: items, append } = useFieldArray({
    control,
    name: `blocks.${blockIndex}.items`,
  });

  return (
    <View style={styles.container}>
      <View style={styles.blockIndicator} />

      <View style={styles.content}>
        <View style={styles.items}>
          {items.map((item, index) => (
            <WorkoutItemForm
              control={control}
              item={item}
              itemIndex={index}
              blockIndex={blockIndex}
            />
          ))}
        </View>

        <Button
          type={"primary-solid-md"}
          text="Add exercise"
          iconName="Plus"
          iconPosition="leading"
          onPress={() => append({ exerciseId: "", sets: [{}] })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing["spacing-3"],
  },
  content: { flexGrow: 1, gap: spacing["spacing-6"] },
  items: {},
  blockIndicator: {
    width: spacing["spacing-1"],
    backgroundColor: colors["primary-700"],
    borderRadius: spacing["spacing-1"],
  },
});
