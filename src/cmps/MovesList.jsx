import { Link } from 'react-router-dom'
import React, { memo } from 'react'
import { MovesListPreview } from './MoveListPreview'

function _MovesList({ moves }) {
  return (
    <article className="moves-list-container">
      <h3> Your Moves:</h3>
      <hr />
      {moves.map((move) => (
        <MovesListPreview move={move} key={move.at} />
      ))}
    </article>
  )
}

export const MovesList = memo(_MovesList)
