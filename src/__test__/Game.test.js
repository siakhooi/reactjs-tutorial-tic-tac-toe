import React from 'react'
import renderer from 'react-test-renderer'
import Game from '../Game'

const ticXY = (t, x, y) => {
  t.children[0] // <div className="game-board">
    .children[0]
    .children[x] // div
    .children[y] // <div className="board-row">
    .props.onClick()
}
const jumpX = (t, x) => {
  t.children[1] // <div className="game-info">
    .children[1] // ol
    .children[x]// li
    .children[0].props.onClick() // button
}
it('Game', () => {
  const component =
    renderer.create(
      <Game />
    )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  ticXY(tree, 0, 0)
  ticXY(tree, 1, 0)
  ticXY(tree, 0, 1)
  ticXY(tree, 1, 1)
  ticXY(tree, 0, 2) // X win
  ticXY(tree, 1, 2) // O still click

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  jumpX(tree, 2)
  jumpX(tree, 1)

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
