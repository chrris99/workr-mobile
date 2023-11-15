import { EXERCISE_CARD_TEST_IDS } from "@/components/exercise/ExerciseCard";
import {
  EXERCISE_LIST_TEST_IDS,
  ExerciseList,
} from "@/components/exercise/ExerciseList";
import { mockExercise } from "@/components/exercise/__test__/mockExercise";
import { render } from "@/utils/test/customRender";

describe("ExerciseList", () => {
  it("should render empty exercise list", () => {
    const { getByTestId } = render(<ExerciseList exercises={[]} />);

    const exerciseList = getByTestId(EXERCISE_LIST_TEST_IDS.LIST);

    expect(exerciseList).toBeTruthy();
  });

  it("should render exercise card for each exercise", () => {
    const { getByTestId } = render(<ExerciseList exercises={[mockExercise]} />);

    const exerciseList = getByTestId(EXERCISE_LIST_TEST_IDS.LIST);
    const exerciseCard = getByTestId(EXERCISE_CARD_TEST_IDS.CARD);

    expect(exerciseList).toBeTruthy();
    expect(exerciseCard).toBeTruthy();
  });

  it("should render separator between exercises", () => {
    const { getByTestId } = render(
      <ExerciseList exercises={[mockExercise, mockExercise]} />
    );

    const separator = getByTestId(EXERCISE_LIST_TEST_IDS.SEPARATOR);

    expect(separator).toBeTruthy();
  });
});
