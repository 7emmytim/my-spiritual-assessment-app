import React from 'react'

const HeaderInput = ({ handleHeaderProfile, type, name, spanValue }) => {

    return (
        <>
            <div className="input-group my-5">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">{spanValue}</span>
                </div>
                <input
                    type={type}
                    name={name}
                    onChange={handleHeaderProfile}
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    required />
            </div>
        </>
    )
}

export default HeaderInput
