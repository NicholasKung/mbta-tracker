import React, { useState } from 'react'
import ScoreList from './ScoreList'


const ScoreForm = (props) => {

  const [ newScore, setNewScore] = useState({
    try1: "",
    try2: "",
    try3: ""
  })

  const handleChange = (event) => {
    setNewScore({
      ...newScore,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let formPayLoad = setScore
    props.onSubmit(formPayLoad)
    setNewScore({
      try1: "",
      try2: "",
      try3: ""
    })
  }

  let sum = 0
  const scoreAdder = () => {
    for(let i = 0; i < newScore.length; i++) {
      debugger
      sum += newScore[i]
    }
    return sum
  }

  return(
    <div>
      <form>
        <label htmlFor="try1">1stTry</label>
        <input id = "try1" type="text" value={newScore.try1} onChange={handleChange}/>

        <label htmlFor="try2">2ndTry</label>
        <input id = "try2" type="text" value={newScore.try2} onChange={handleChange}/>

        <label htmlFor="try3">3rdTry</label>
        <input id = "try3" type="text" value={newScore.try3} onChange={handleChange}/>

        <input type= "submit" value = "Enter"/>
      </form>

      <ScoreList
        scoreAdder = {scoreAdder()}
      />

    </div>

  )
}

export default ScoreForm
