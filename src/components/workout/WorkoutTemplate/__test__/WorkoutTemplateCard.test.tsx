import {
  WORKOUT_TEMPLATE_CARD_TEST_IDS,
  WorkoutTemplateCard,
} from "@/components/workout/WorkoutTemplate/WorkoutTemplateCard";
import { WorkoutTemplate } from "@/types/workout";
import { render } from "@/utils/test/customRender";

const mockWorkoutTemplate: WorkoutTemplate = {
  id: "id",
  name: "name",
  description: "description",
  blocks: [],
};

describe("WorkoutTemplateCard", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <WorkoutTemplateCard workoutTemplate={mockWorkoutTemplate} />
    );

    const card = getByTestId(WORKOUT_TEMPLATE_CARD_TEST_IDS.CARD);

    expect(card).toBeVisible();
  });

  it("should render workout template name", () => {
    const { getByTestId } = render(
      <WorkoutTemplateCard workoutTemplate={mockWorkoutTemplate} />
    );

    const name = getByTestId(WORKOUT_TEMPLATE_CARD_TEST_IDS.NAME);

    expect(name).toBeVisible();
    expect(name).toHaveTextContent("name");
  });
});
