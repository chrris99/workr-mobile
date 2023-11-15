import { Exercise } from "@/models/exercise";
import { Set, WorkoutBlock } from "@/types/workout";

type WorkoutItemTemplateResponse = {
  exercise: Exercise;
  sets: Set[];
  comment: string;
};

type WorkoutBlockTemplateResponse = {
  itemTemplates: WorkoutItemTemplateResponse[];
};

export type WorkoutTemplate = {
  id: string;
  name: string;
  description?: string;
  blocks: WorkoutBlock[];
};

export type CreateWorkoutTemplateRequest = Omit<WorkoutTemplate, "id">;
export type UpdateWorkoutTemplateRequest = WorkoutTemplate;

export type WorkoutTemplateResponse = Omit<WorkoutTemplate, "blocks"> & {
  blockTemplates: WorkoutBlockTemplateResponse[];
};
