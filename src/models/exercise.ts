import { Muscle } from "@/types/muscle";

export type Exercise = {
  id: string;
  name: string;
  targetMuscleGroup: Muscle;
  type?: string;
  description?: string;
  imageUrl?: string;
  forceType?: string;
  instructions?: string[];
  secondaryMuscleGroups?: Muscle[];
};

export type CreateExerciseRequest = Omit<Exercise, "id" | "imageUrl">;
export type UpdateExerciseRequest = Omit<Exercise, "imageUrl">;

export type ExerciseResponse = Exercise;
