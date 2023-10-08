import { WorkoutBlock } from "@/types/workout";

export type WorkoutTemplate = {
  id: string;
  name: string;
  description?: string;
  blocks: WorkoutBlock[];
};

export type CreateWorkoutTemplateRequest = Omit<WorkoutTemplate, "id">;
export type UpdateWorkoutTemplateRequest = WorkoutTemplate;

export type WorkoutTemplateResponse = WorkoutTemplate;
