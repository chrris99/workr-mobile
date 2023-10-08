import { WorkoutBlock, WorkoutDay } from "@/types/workout";
import { Control } from "react-hook-form";

export type WorkoutTemplateFormValues = {
  name: string;
  description?: string;
  blocks: WorkoutBlock[];
};
export type WorkoutPlanFormValues = {
  name: string;
  description?: string;
  daysPerWeek: number;
  weekCount: number;
  workouts: WorkoutDay[];
};

export type BaseWorkoutTemplateFormProps = {
  control: Control<WorkoutTemplateFormValues>;
};

export interface BaseWorkoutPlanFormProps {
  control: Control<WorkoutPlanFormValues>;
}
