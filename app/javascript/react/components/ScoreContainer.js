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

  const scoreTiles = scores.map((score) => {
    return (
      <ScoreTile
        key={score.id}
        scoreData={score}
      />
    )
  })


  return (
    <div>
      <ScoreForm/>
      {scoreTiles}
    </div>
  )
}


export default ScoreContainer
