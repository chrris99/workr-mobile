import { BottomModalPage } from "@/components/base/modal/types";
import { ExerciseDetailForm } from "@/components/exercise/forms/ExerciseDetailsForm";

export const EXERCISE_MODAL_PAGE_CONFIG: BottomModalPage[] = [
  {
    component: <ExerciseDetailForm control={control} />,
    title: headers?.detailPage?.title ?? "Input exerecise details",
    subtitle: headers?.detailPage?.subtitle,
  },
  {
    component: <TargetMuscleForm control={control} />,
    title: headers?.musclesPage?.title ?? "Select pirmary muscle group",
    subtitle:
      headers?.musclesPage?.subtitle ??
      "The main target muscle required for the exercise",
  },
  {
    component: <SecondaryMuscleForm control={control} />,
    title: headers?.musclesPage?.title ?? "Select secondary muscle groups",
    subtitle:
      headers?.musclesPage?.subtitle ??
      "The support muscles that ensure stability and efficiency for the primary muscle",
  },
  {
    component: <ExerciseInstructionsForm control={control} />,
    title: headers?.instructionsPage?.title ?? "Default",
    subtitle: headers?.instructionsPage?.subtitle,
  },
];

export const EXERCISE_MODAL_HEADERS_CONFIG: 