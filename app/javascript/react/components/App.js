import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScoreContainer from "./ScoreContainer"

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ScoreContainer}/>
      </BrowserRouter>
    </div>
  )
}

export default App
