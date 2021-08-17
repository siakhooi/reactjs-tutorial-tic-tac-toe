import React from 'react'
import renderer from 'react-test-renderer'
import Board from '../Board'

it('Board', () => {
  const dummyFunction = jest.fn()
  const squares = Array(9).fill(null)
  const component =
    renderer.create(
      <Board
        squares={squares}
        onClick={dummyFunction}
      />
    )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.children.forEach((x) => {
    x.children.forEach((y) => {
      y.props.onClick()
    })
  })
  expect(dummyFunction).toBeCalledTimes(9)
})
