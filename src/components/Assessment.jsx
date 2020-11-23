import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { questionsData } from "./Qdata"
import Questions from "./Questions"

const Assessment = ({ submitGrade, completed }) => {

    const [totalGrade, setTotalGrade] = useState([])
    const [showError, setShowError] = useState(false)

    const handleGradeTotal = (e) => {
        setShowError(false)
        const { value } = e.target
        // setTotalGrade(prevScore => [...prevScore.filter(a => !(a.includes(value.slice(1)))), value]) 
        setTotalGrade(prevScore => [...prevScore.filter(a => !(a.slice(1) === value.slice(1))), value])
    }

    const gradeSubmit = () => {
        submitGrade(totalGrade)
        if (!completed) {
            setShowError(true)
        } else {
            setShowError(false)
        }
    }

    return (
        <div className="container" id="assessment-page">
            <h1 className="lead mt-5">Please answer the following questions</h1>
            <p className="text-muted"> {totalGrade.length} out of 30 questions answered </p>
            <div className="form row mt-5">
                {questionsData.map((questData, index) => {
                    return (
                        <Questions
                            key={index}
                            handleGradeTotal={handleGradeTotal}
                            questData={questData}
                            index={index} />
                    )
                })}
            </div>
            <p className="mb-4 text-muted"> {totalGrade.length} out of 30 questions answered </p>
            { showError ? <p className="text-danger lead m-0 mb-4 p-0">To submit, You have to answer all the 30 questions above</p> : null}
            <Link to={totalGrade.length === 30 ? "./display-score" : "./assessment"}>
                <button className="btn btn-warning text-light mb-5" onClick={gradeSubmit}>FINISH</button>
            </Link>
        </div>
    )
}

export default Assessment
