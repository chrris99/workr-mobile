import {
  WorkoutBlockTemplateResponse,
  WorkoutItemTemplateResponse,
  WorkoutTemplateResponse,
} from "@/models/workoutTemplate";
import { WorkoutBlock, WorkoutItem, WorkoutTemplate } from "@/types/workout";

const toWorkoutItem = (dto: WorkoutItemTemplateResponse): WorkoutItem => ({
  exerciseId: dto.exercise.id,
  sets: dto.sets,
  type: "repeated",
});

const toWorkoutBlock = (dto: WorkoutBlockTemplateResponse): WorkoutBlock => ({
  items: dto.itemTemplates.map((itemTemplate) => toWorkoutItem(itemTemplate)),
});

export const toWorkoutTemplate = (
  workoutTemplateResponse: WorkoutTemplateResponse
): WorkoutTemplate => ({
  id: workoutTemplateResponse.id,
  name: workoutTemplateResponse.name,
  description: workoutTemplateResponse.description,
  blocks: workoutTemplateResponse.blockTemplates.map((block) =>
    toWorkoutBlock(block)
  ),
});
