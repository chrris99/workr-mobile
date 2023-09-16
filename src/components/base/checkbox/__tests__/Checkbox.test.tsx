import { render } from "@testing-library/react-native";
import { Checkbox } from "../Checkbox";

describe("checkbox", () => {
  describe("in selected state", () => {
    it("should render correctly", () => {
      const component = render(<Checkbox selected={true} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("in unselected state", () => {
    it("should render correctly", () => {
      const component = render(<Checkbox selected={false} />);
      expect(component).toMatchSnapshot();
    });
  });
});
