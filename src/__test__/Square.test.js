import React from "react";
import renderer from 'react-test-renderer';
import Square from "../Square";

it("Square", () => {
  const dummyFunction = jest.fn();
  const component =
    renderer.create(
      <Square
        value={"1"}
        onClick={dummyFunction} />,
    );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick()
  expect(dummyFunction).toBeCalled();

});
