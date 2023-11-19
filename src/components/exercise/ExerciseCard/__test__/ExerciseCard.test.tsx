import {
  EXERCISE_CARD_TEST_IDS,
  ExerciseCard,
} from "@/components/exercise/ExerciseCard/ExerciseCard";
import {
  EXERCISE_DESCRIPTION,
  EXERCISE_NAME,
  EXERCISE_PRIMARY_MUSCLE,
  mockExercise,
} from "@/components/exercise/__test__/mockExercise";
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

  it("should display exercise target muscle group in upper case", () => {
    const { getByTestId } = render(<ExerciseCard exercise={mockExercise} />);

    const primaryMuscle = getByTestId(EXERCISE_CARD_TEST_IDS.PRIMARY_MUSCLE);

    expect(primaryMuscle).toBeTruthy();
    expect(primaryMuscle).toHaveTextContent(
      EXERCISE_PRIMARY_MUSCLE.toUpperCase()
    );
  });

  describe("on press", () => {
    it("should navigate to exerise detail screen", () => {
      const { getByTestId } = render(<ExerciseCard exercise={mockExercise} />);

      const touchable = getByTestId(EXERCISE_CARD_TEST_IDS.CARD);

      fireEvent.press(touchable);

      expect(mockNavigate).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith("ExerciseDetail", {
        id: mockExercise.id,
      });
    });
  });
});
