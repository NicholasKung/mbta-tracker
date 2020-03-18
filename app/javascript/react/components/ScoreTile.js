import React from 'react'

const ScoreTile = (props) => {

  const addRound = () => {
    let total = 0
    total = props.scoreData.first + props.scoreData.second + props.scoreData.third
    return total
  }

  return(
    <div>
      <h3>First Throw: {props.scoreData.first}</h3>
      <h3>Second Throw: {props.scoreData.second}</h3>
      <h3>Third Throw: {props.scoreData.third}</h3>
      <h2>Round Score:{addRound()}</h2>
    </div>
  )
}

export default ScoreTile
