import { render, renderHook } from "@testing-library/react-native";
import { Item } from "../types";
import { SelectInput } from "../SelectInput";
import { useForm } from "react-hook-form";
import { MULTI_SELECT_ITEM_TEST_IDS } from "../MultiSelectItem";
import { MultiSelectInput } from "../MultiSelectInput";

const options: Item<string>[] = [
  { value: "abs", displayText: "Abs", iconName: "Abs" },
  { value: "biceps", displayText: "Biceps", iconName: "Arm" },
];

describe("multi select input", () => {
  it("should render multi select item for each option", () => {
    const { result } = renderHook(() => useForm());
    const { getByTestId } = render(
      <MultiSelectInput
        control={result.current.control}
        name="muscle"
        options={options}
      />
    );

    const absOption = getByTestId(`${MULTI_SELECT_ITEM_TEST_IDS.ITEM}-abs`);
    const bicepsOption = getByTestId(
      `${MULTI_SELECT_ITEM_TEST_IDS.ITEM}-biceps`
    );

    expect(absOption).toBeTruthy();
    expect(bicepsOption).toBeTruthy();
  });
});
