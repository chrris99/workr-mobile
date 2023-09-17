import { fireEvent, render } from "@testing-library/react-native";
import { Item } from "../types";
import { MultiSelectItem } from "../MultiSelectItem";
import { SELECT_ITEM_TEST_IDS } from "../SelectItem";

const mockItem: Item<string> = {
  value: "abs",
  displayText: "Abs",
  iconName: "Abs",
};

const mockOnChange = jest.fn();
const mockSetSelectedItems = jest.fn();

describe("multi select item", () => {
  afterEach(() => jest.clearAllMocks());

  describe("on press", () => {
    describe("item is selected", () => {
      it("should call on change prop with removed item", () => {
        const selectedItems = ["abs", "chest"];

        const { getByTestId } = render(
          <MultiSelectItem
            item={mockItem}
            onChange={mockOnChange}
            selectedItems={selectedItems}
            setSelectedItems={mockSetSelectedItems}
          />
        );

        const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
        fireEvent.press(selectItem);

        expect(mockOnChange).toBeCalledTimes(1);
        expect(mockOnChange).toBeCalledWith(["chest"]);
      });

      it("should call set selected items prop with removed item", () => {
        const selectedItems = ["abs", "chest"];

        const { getByTestId } = render(
          <MultiSelectItem
            item={mockItem}
            onChange={mockOnChange}
            selectedItems={selectedItems}
            setSelectedItems={mockSetSelectedItems}
          />
        );

        const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
        fireEvent.press(selectItem);

        expect(mockSetSelectedItems).toBeCalledTimes(1);
        expect(mockSetSelectedItems).toBeCalledWith(["chest"]);
      });
    });

    describe("item is not selected", () => {
      it("should call on change prop with added item", () => {
        const selectedItems = ["chest"];

        const { getByTestId } = render(
          <MultiSelectItem
            item={mockItem}
            onChange={mockOnChange}
            selectedItems={selectedItems}
            setSelectedItems={mockSetSelectedItems}
          />
        );

        const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
        fireEvent.press(selectItem);

        expect(mockOnChange).toBeCalledTimes(1);
        expect(mockOnChange).toBeCalledWith(["abs", "chest"]);
      });

      it("should call set selected items prop with added item", () => {
        const selectedItems = ["chest"];

        const { getByTestId } = render(
          <MultiSelectItem
            item={mockItem}
            onChange={mockOnChange}
            selectedItems={selectedItems}
            setSelectedItems={mockSetSelectedItems}
          />
        );

        const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
        fireEvent.press(selectItem);

        expect(mockSetSelectedItems).toBeCalledTimes(1);
        expect(mockSetSelectedItems).toBeCalledWith(["abs", "chest"]);
      });
    });
  });
});
