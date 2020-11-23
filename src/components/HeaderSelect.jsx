import React from 'react'

const HeaderSelect = ({ handleChristianStatus }) => {
    return (
        <div className="input-group mb-5">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Born Again ?</span>
            </div>
            <select
                id="inputState"
                defaultValue=""
                onChange={handleChristianStatus}
                className="form-control"
                style={{ background: "transparent" }}>
                <option disabled></option>
                <option value="christian" >Yes, I am</option>
                <option value="not-a-christian" >Not yet</option>
                <option value="not-a-christian" >Not sure</option>
            </select>
        </div>
    )
}

export default HeaderSelect
