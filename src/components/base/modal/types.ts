import { ViewProps } from "react-native";

export interface BottomModalHeaderProps {
  title: string;
  subtitle?: string;
}

export interface BottomModalProps extends Pick<ViewProps, "children"> {
  title: string;
  subtitle?: string;
  onDismiss?: () => void;
  scrollable?: boolean;
}

export interface BottomModalPage {
  component: JSX.Element;
  title: string;
  subtitle?: string;
  submitTitle?: string;
}

export interface PaginatedBottomModalProps
  extends Omit<BottomModalProps, "title" | "subtitle"> {
  pages: BottomModalPage[];
}
