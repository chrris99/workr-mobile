import {
  EXERCISE_CARD_TEST_IDS,
  ExerciseCard,
} from "@/components/exercise/ExerciseCard";
import {
  EXERCISE_DESCRIPTION,
  EXERCISE_LONG_DESCRIPTION,
  EXERCISE_NAME,
  EXERCISE_PRIMARY_MUSCLE,
  mockExercise,
} from "@/components/exercise/__test__/mockExercise";
import { Exercise } from "@/models/exercise";
import { render } from "@/utils/test/customRender";
import { fireEvent } from "@testing-library/react-native";

// Mock navigation
const mockNavigate = jest.fn();
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({ navigate: mockNavigate }),
  };
});

describe("ExerciseCard", () => {
  it("should display exercise name", () => {
    const { getByTestId } = render(<ExerciseCard exercise={mockExercise} />);

    const exerciseName = getByTestId(EXERCISE_CARD_TEST_IDS.NAME);

    expect(exerciseName).toBeTruthy();
    expect(exerciseName).toHaveTextContent(EXERCISE_NAME);
  });

  it("should display exercise description", () => {
    const { getByTestId } = render(<ExerciseCard exercise={mockExercise} />);

    const exerciseDescription = getByTestId(EXERCISE_CARD_TEST_IDS.DESCRIPTION);

    expect(exerciseDescription).toBeTruthy();
    expect(exerciseDescription).toHaveTextContent(EXERCISE_DESCRIPTION);
  });

  it("should display first 100 characters of long description", () => {
    const exercise: Exercise = {
      ...mockExercise,
      description: EXERCISE_LONG_DESCRIPTION,
    };

    const { getByTestId } = render(<ExerciseCard exercise={exercise} />);

    const exerciseDescription = getByTestId(EXERCISE_CARD_TEST_IDS.DESCRIPTION);

    expect(exerciseDescription).toBeTruthy();
    expect(exerciseDescription).toHaveTextContent(
      `${EXERCISE_LONG_DESCRIPTION.slice(0, 100)}...`
    );
  });

  it("should display exercise target muscle group in upper case", () => {
    const { getByTestId } = render(<ExerciseCard exercise={mockExercise} />);

    const primaryMuscle = getByTestId(EXERCISE_CARD_TEST_IDS.PRIMARY_MUSCLE);

    expect(primaryMuscle).toBeTruthy();
    expect(primaryMuscle).toHaveTextContent(
      EXERCISE_PRIMARY_MUSCLE.toUpperCase()
    );
  });

  it("should display first exercise secondary muscle group", () => {
    const exercise: Exercise = {
      ...mockExercise,
      secondaryMuscleGroups: ["abductors", "calves"],
    };

    const { getByTestId } = render(<ExerciseCard exercise={exercise} />);

    const secondaryMuscle = getByTestId(
      EXERCISE_CARD_TEST_IDS.SECONDARY_MUSCLE
    );

    expect(secondaryMuscle).toBeTruthy();
    expect(secondaryMuscle).toHaveTextContent("abductors");
  });

  describe("on press", () => {
    it("should navigate to exerise detail screen", () => {
      const { getByTestId } = render(<ExerciseCard exercise={mockExercise} />);

      const touchable = getByTestId(EXERCISE_CARD_TEST_IDS.TOUCHABLE);

      fireEvent.press(touchable);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("ExerciseDetail", {
        id: mockExercise.id,
      });
    });
  });

  describe("on swipe right", () => {
    it("should display edit exercise action", () => {
      const { getByTestId } = render(<ExerciseCard exercise={mockExercise} />);

      const card = getByTestId(EXERCISE_CARD_TEST_IDS.CARD);

      //fireEvent(card, "onSwipeableRightOpen");

      const editButton = getByTestId(EXERCISE_CARD_TEST_IDS.EDIT_BUTTON);

      expect(editButton).toBeVisible();
    });

    it("should display delete exercise action", () => {
      //TODO
    });
  });
});
