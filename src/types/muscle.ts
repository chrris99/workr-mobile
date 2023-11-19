import { Item } from "@/components/base/input/select/types";
import { IconName } from "@/design-system/icons/icons";

export const muscleValues = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes ",
  "hamstrings",
  "hip flexors",
  "lats",
  "lower back",
  "upper back",
  "neck",
  "obliques",
  "quads",
  "shoulders",
  "traps",
  "triceps",
] as const;

export const muscles = [...muscleValues];

export type Muscle = (typeof muscleValues)[number];

export const muscleItem = (muscle: Muscle): Item<string> => ({
  value: muscle,
  displayText: capitalize(muscle),
  iconName: muscleToIcon(muscle),
});

export const muscleToIcon = (muscle: Muscle): IconName => {
  switch (muscle) {
    case "abductors":
    case "glutes ":
      return "Butt";
    case "forearms":
    case "biceps":
    case "triceps":
    case "shoulders":
      return "Arm";
    case "quads":
    case "calves":
    case "hamstrings":
      return "Leg";
    case "abs":
    case "chest":
    case "obliques":
      return "Abs";
    default:
      return "Arm";
  }
};

const capitalize = (muscle: Muscle) =>
  muscle.charAt(0).toUpperCase() + muscle.slice(1);
