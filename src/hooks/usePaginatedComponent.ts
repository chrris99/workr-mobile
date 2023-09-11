import { ReactElement, useState } from "react";

export const usePaginatedComponent = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const isFirstStep = () => currentStepIndex === 0;
  const isLastStep = () => currentStepIndex === steps.length - 1;

  const prev = () =>
    setCurrentStepIndex((curr) => {
      if (curr <= 0) return curr;
      return curr - 1;
    });

  const next = () =>
    setCurrentStepIndex((curr) => {
      if (curr >= steps.length - 1) return curr;
      return curr + 1;
    });

  const reset = () => setCurrentStepIndex(0);

  return {
    steps,
    currentStepIndex,
    stepCount: steps.length,
    step: steps[currentStepIndex],
    isFirstStep,
    isLastStep,
    prev,
    next,
    reset,
  };
};
