import React from 'react'
import image from "../images/interview.svg"
import HeaderForm from "./HeaderForm"

const Header = ({ handleUserProfile, handleProfileSubmit }) => {

    return (
        <>
            <div className="container-fluid" id="header">
                <div className="row py-5" style={{ height: "auto" }}>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 my-auto py-auto">
                        <h5>“Let us search out and examine our ways…” <br /> Lamentations 3:40 </h5>
                        <img src={image} alt="headerImage" />
                        <hr className="m-0" />
                        {/* <h1 className="display-4 my-2">Answer fun questions about your spiritual life and maturity</h1> */}
                        <h1 className="display-4 my-2">Answer questions to check the level of your spiritual life and maturity</h1>
                        <hr className="m-0" />
                    </div>
                    <div className="col-lg-2"></div>
                </div>
                <div className="row" style={{ background: "#fff" }}>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 m-auto">
                        <HeaderForm
                            handleUserProfile={handleUserProfile}
                            handleProfileSubmit={handleProfileSubmit} />
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </>
    )
}

export default Header
