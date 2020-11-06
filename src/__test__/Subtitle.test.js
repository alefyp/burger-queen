import React from "react";
import { render, cleanup } from "react-testing-library";
import Subtitle from "../Components/Subtitle";

afterEach(cleanup);

describe("Subtitle", () => {
  it("should contains name", () => {
    const { getByText } = render(<Subtitle text="Alejandra" />);
    getByText("Alejandra");
  });
});
