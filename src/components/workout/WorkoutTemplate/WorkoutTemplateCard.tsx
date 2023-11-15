import Text from "@/design-system/typography/Text";
import { WorkoutTemplate } from "@/models/workoutTemplate";
import { testId } from "@/utils/test/testId";
import { View } from "react-native";

export const WORKOUT_TEMPLATE_CARD_TEST_IDS = {
  CARD: testId("workout-template-card"),
  NAME: testId("workout-template-name"),
};

type WorkoutTemplateCardProps = {
  workoutTemplate: WorkoutTemplate;
};

export const WorkoutTemplateCard = ({
  workoutTemplate,
}: WorkoutTemplateCardProps) => {
  return (
    <View testID={WORKOUT_TEMPLATE_CARD_TEST_IDS.CARD}>
      <Text testID={WORKOUT_TEMPLATE_CARD_TEST_IDS.NAME}>
        {workoutTemplate.name}
      </Text>
    </View>
  );
};
