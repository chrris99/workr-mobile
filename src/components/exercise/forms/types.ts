import { Muscle } from "@/types/muscle";
import { Control } from "react-hook-form";

export type ExerciseInstruction = {
  description: string;
};

export type ExerciseFormValues = {
  name: string;
  targetMuscleGroup: Muscle;
  secondaryMuscleGroups: Muscle[];
  description: string;
  instructions: ExerciseInstruction[];
};

export interface BaseExerciseFormProps {
  control: Control<ExerciseFormValues>;
}

export interface ExerciseDetailsFormProps {}
