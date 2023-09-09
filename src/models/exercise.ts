import { Muscle } from "../types/muscle";

export type Exercise = {
  id: string;
  name: string;
  targetMuscleGroup: Muscle;
  type?: string;
  description?: string;
  forceType?: string;
  instructions?: string[];
  secondaryMuscleGroups?: string[]
};

export type CreateExerciseRequest = Omit<Exercise, 'id'>
export type UpdateExerciseRequest = Exercise

export type ExerciseResponse = Exercise;
