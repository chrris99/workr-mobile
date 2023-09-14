type PaginationType = "active" | "completed";
type PaginationStyle = "dot" | "bar";

export interface PaginationIndicatorProps {
  isActive: boolean;
  paginationStyle: PaginationStyle;
}

export interface PaginationProps {
  steps: number;
  currentStepIndex: number;
  type?: PaginationType;
  style?: PaginationStyle;
}
