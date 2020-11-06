import React from "react";
import renderer from "react-test-renderer";
import Title from "../Components/Title";

it("Matches Title Component Snapshot", () => {
  const tree = renderer.create(<Title text="Hello world!" />).toJSON();
  expect(tree).toMatchSnapshot();
});
