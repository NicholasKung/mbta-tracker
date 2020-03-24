import React, { useState, useEffect } from 'react'
import ScoreForm from './ScoreForm'

const ScoreFormContainer = props => {
  const [ scores, setScores ] = useState([])

  const submitNewScore = (formPayLoad) => {
    fetch('/api/v1/scores.json', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formPayLoad),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setScores([
        ...scores,
        body])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

}
