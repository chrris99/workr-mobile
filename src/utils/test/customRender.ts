import { AllProviders } from "@/utils/test/dataProviders";
import { RenderOptions, render } from "@testing-library/react-native";
import { JSXElementConstructor, ReactElement } from "react";

const customRender = (
  ui: ReactElement<unknown, string | JSXElementConstructor<any>>,
  options?: RenderOptions | undefined
) => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
