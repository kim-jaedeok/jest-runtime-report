import { render } from "@testing-library/react";
import Test from "./Test";

describe("transform test", () => {
  it("test module using esm", () => {
    render(<Test />);
  });
});
