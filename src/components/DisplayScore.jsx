import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import success from "../images/S1.svg"
import primary from "../images/P1.svg"
import info from "../images/I2.svg"
import warning from "../images/W1.svg"
import danger from "../images/D1.svg"
import CountUp from 'react-countup'

const DisplayScore = ({ userProfile, finalScore }) => {
    // finalScore = 40
    // userProfile.fName = "MrPotter"
    let score = Math.round(finalScore / 71 * 100)
    const [stageStyle, setStageStyle] = useState()
    const [stageGrade, setStageGrade] = useState()
    const [image, setImgage] = useState()

    useEffect(() => {
        if (score >= 75) {
            setStageStyle("text-success")
            setStageGrade("Matured Adult/Father")
            setImgage(success)
        } else if (score < 75 && score >= 60) {
            setStageStyle("text-primary")
            setStageGrade("Young Adult/Teacher")
            setImgage(primary)
        } else if (score < 60 && score >= 50) {
            setStageStyle("text-info")
            setStageGrade("Teenager")
            setImgage(info)
        } else if (score < 50 && score >= 40) {
            setStageStyle("text-warning")
            setStageGrade("Young Child")
            setImgage(warning)
        } else if (score < 40) {
            setStageStyle("text-danger")
            setStageGrade("Baby")
            setImgage(danger)
        }
    }, [score])

    return (
        <>
            { finalScore === undefined ?
                <div style={{ textAlign: "center" }}>
                    <p className="lead mt-5 pt-5">Please go to the homepage to answer the necessary questions to view this page properly</p>
                    <Link to="./">
                        Click here to go to the Homepage
                    </Link>
                </div>
                :
                <div className="container pt-5 px-5 mt-3" id="display-page">
                    <img src={image} alt="bible" />
                    <div className="row text-dark" style={{ backgroundColor: "#fff" }}>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h1 className="display-4 pt-5">
                                You're Done! {userProfile.fName} <br /> your score is <span className={stageStyle}>
                                    <CountUp
                                        start={0}
                                        end={score}
                                        duration={3}
                                        delay={1} />
                                % </span>
                                <br /> you are a <span className={stageStyle}>{stageGrade}</span>
                            </h1>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>}
        </>
    )
}

export default DisplayScore
