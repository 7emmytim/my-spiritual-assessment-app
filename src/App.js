import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'
import Header from "./components/Header"
import Assessment from "./components/Assessment"
import DisplayScore from "./components/DisplayScore"

function App() {

  const [userProfile, setUserProfile] = useState({ fName: "" })
  const [finalScore, setFinalScore] = useState()
  const [completed, setCompleted] = useState()

  const handleUserProfile = (e) => {
    const { name, value } = e.target
    setUserProfile(previousUserProfile => {
      return {
        ...previousUserProfile, [name]: value
      }
    })
  }

  const handleProfileSubmit = (christianStatus) => {
    christianStatus ? console.log("Assessment Page", userProfile) : console.log("Will you like to become a Christian?")
  }

  const submitGrade = (totalGrade) => {
    setFinalScore(0)
    if (totalGrade.length === 30) {
      setCompleted(true)
      totalGrade.forEach(a => {
        if (a.includes("A")) setFinalScore(p => p += 3)
        else if (a.includes("B")) setFinalScore(p => p += 2)
        else if (a.includes("C")) setFinalScore(p => p += 1)
        else if (a.includes("D")) setFinalScore(p => p += 0)
      })
    } else {
      setCompleted(false)
    }

  }

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Header
            handleProfileSubmit={handleProfileSubmit}
            handleUserProfile={handleUserProfile} />
        </Route>
        <Route path="/assessment">
          <Assessment
            completed={completed}
            submitGrade={submitGrade} />
        </Route>
        <Route path="/display-score">
          <DisplayScore
            userProfile={userProfile}
            finalScore={finalScore} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
