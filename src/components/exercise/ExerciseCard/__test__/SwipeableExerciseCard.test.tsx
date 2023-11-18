import {
  SWIPEABLE_EXERCISE_CARD_TEST_IDS,
  SwipeableExerciseCard,
} from "@/components/exercise/ExerciseCard/SwipeableExerciseCard";
import { mockExercise } from "@/components/exercise/__test__/mockExercise";
import { render } from "@/utils/test/customRender";

describe("SwipeableExerciseCard", () => {
  describe("on swipe right", () => {
    it("should display edit exercise action", () => {
      const { getByTestId } = render(
        <SwipeableExerciseCard exercise={mockExercise} />
      );

      const card = getByTestId(SWIPEABLE_EXERCISE_CARD_TEST_IDS.SWIPEABLE_CARD);

      //fireEvent(card, "onSwipeableRightOpen");

      const editButton = getByTestId(
        SWIPEABLE_EXERCISE_CARD_TEST_IDS.EDIT_BUTTON
      );

      expect(editButton).toBeVisible();
    });

    it("should display delete exercise action", () => {
      //TODO
    });
  });
});
