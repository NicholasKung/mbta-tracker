import React from 'react'

const ScoreTile = (props) => {


  return(
    <div>
      <h3>First Throw: {props.scoreData.first}</h3>
      <h3>Second Throw: {props.scoreData.second}</h3>
      <h3>Third Throw: {props.scoreData.third}</h3>
      <h2>Round Score:{props.addRound}</h2>
    </div>
  )
}

export default ScoreTile
