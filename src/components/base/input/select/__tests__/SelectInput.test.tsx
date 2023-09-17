import { render, renderHook } from "@testing-library/react-native";
import { Item } from "../types";
import { SelectInput } from "../SelectInput";
import { useForm } from "react-hook-form";
import { SINGLE_SELECT_ITEM_TEST_IDS } from "../SingleSelectItem";

const options: Item<string>[] = [
  { value: "abs", displayText: "Abs", iconName: "Abs" },
  { value: "biceps", displayText: "Biceps", iconName: "Arm" },
];

describe("single select input", () => {
  it("should render single select item for each option", () => {
    const { result } = renderHook(() => useForm());
    const { getByTestId } = render(
      <SelectInput
        control={result.current.control}
        name="muscle"
        options={options}
      />
    );

    const absOption = getByTestId(`${SINGLE_SELECT_ITEM_TEST_IDS.ITEM}-abs`);
    const bicepsOption = getByTestId(
      `${SINGLE_SELECT_ITEM_TEST_IDS.ITEM}-biceps`
    );
    expect(absOption).toBeTruthy();
    expect(bicepsOption).toBeTruthy();
  });
});
