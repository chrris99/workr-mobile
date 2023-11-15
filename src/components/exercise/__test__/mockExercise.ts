import { Exercise } from "@/models/exercise";

export const EXERCISE_ID = "Exercise ID";
export const EXERCISE_NAME = "Bench press";
export const EXERCISE_DESCRIPTION = "x".repeat(10);
export const EXERCISE_LONG_DESCRIPTION = "x".repeat(1000);
export const EXERCISE_PRIMARY_MUSCLE = "abs";

export const mockExercise: Exercise = {
  id: EXERCISE_ID,
  name: EXERCISE_NAME,
  description: EXERCISE_DESCRIPTION,
  targetMuscleGroup: EXERCISE_PRIMARY_MUSCLE,
};
