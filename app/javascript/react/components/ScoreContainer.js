import React, { useState, useEffect } from 'react'
import ScoreForm from './ScoreForm'
import ScoreTile from './ScoreTile'

const ScoreContainer = (props) => {
  const [scores, setScores] = useState([])

  useEffect(() => {
    fetch('/api/v1/scores.json')
    .then(response => {
      if(response.ok) {
        return response
      } else {
        throw new Error(`${response.status}: ${response.statusText}`)
      }
    })
    .then(response => response.json())
    .then(body => {
      setScores(body)
    })
    .catch(error => {
      console.log(`Error fetching scores: ${error.message}`)
    })
  }, [])

  let totalScore = 0

  const addRound = () => {
    let total = 0
    total = props.scoreData.first + props.scoreData.second + props.scoreData.third
    totalScore += total
    return total
  }



  const scoreTiles = scores.map((score) => {
    return (
      <ScoreTile
        key={score.id}
        scoreData={score}
        addRound={addRound}
      />
    )
  })



  return (
    <div>
      <ScoreForm/>
      {scoreTiles}
      <h1>Total:{totalScore}</h1>
    </div>
  )
}


export default ScoreContainer
