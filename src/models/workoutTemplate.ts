import { Exercise } from "@/models/exercise";
import { Set, WorkoutTemplate } from "@/types/workout";

export type WorkoutItemTemplateResponse = {
  exercise: Exercise;
  sets: Set[];
  comment: string;
};

export type WorkoutBlockTemplateResponse = {
  itemTemplates: WorkoutItemTemplateResponse[];
};

export type WorkoutTemplateResponse = Omit<WorkoutTemplate, "blocks"> & {
  blockTemplates: WorkoutBlockTemplateResponse[];
};

export type CreateWorkoutTemplateRequest = Omit<WorkoutTemplate, "id">;
export type UpdateWorkoutTemplateRequest = WorkoutTemplate;
