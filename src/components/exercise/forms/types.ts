import { Control, FieldValues, Path } from "react-hook-form";
import { Muscle } from "../../../types/muscle";

export type ExerciseInstruction = {
  description: string;
};

export type ExerciseFormValues = {
  name: string;
  targetMuscleGroup: Muscle;
  description: string;
  instructions: ExerciseInstruction[];
};

export interface BaseExerciseFormProps {
  control: Control<ExerciseFormValues>;
}

export interface ExerciseDetailsFormProps {}
