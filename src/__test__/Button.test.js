import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Components/Button';

it("Matches Button Component Snapshot", () => {
  const tree = renderer.create(<Button type="submit" text="Click me!" />).toJSON();
  expect(tree).toMatchSnapshot();
});




