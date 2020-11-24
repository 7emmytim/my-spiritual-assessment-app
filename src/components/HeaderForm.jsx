import React, { useState } from 'react'
import { Link } from "react-router-dom"
import HeaderInput from "./HeaderInput"
import HeaderSelect from "./HeaderSelect"
import Dummy from "./Dummy"

const HeaderForm = ({ handleUserProfile, handleProfileSubmit }) => {

    const [christianStatus, setChristianStatus] = useState()

    const handleChristianStatus = (e) => {
        const inputValue = e.target.value
        inputValue === "christian" ? setChristianStatus("christian") : inputValue === "not-a-christian" ? setChristianStatus("not-a-christian") : setChristianStatus("")
    }

    const handleHeaderProfile = (e) => handleUserProfile(e)
    const saveUserProfile = () => handleProfileSubmit(christianStatus)

    return (
        <div className="form">
            <HeaderInput handleHeaderProfile={handleHeaderProfile} type="text" name="fName" spanValue="User Name" />
            <HeaderSelect handleChristianStatus={handleChristianStatus} />
            {
                christianStatus === "christian" ?
                    <>
                        <Dummy />
                        <Link to="/assessment">
                            <button className="btn btn-warning text-light mb-5" onClick={saveUserProfile} >CONTINUE</button>
                        </Link>
                    </>
                    : christianStatus === "not-a-christian" ?
                        <>
                            <Dummy />
                            <p className="lead text-secondary mb-5">Do you want to be Born Again ?</p>
                        </> : null
            }
        </div>
    )
}

export default HeaderForm
