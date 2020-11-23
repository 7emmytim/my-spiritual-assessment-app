import React from 'react'

const QSelect = ({ questOption }) => {

    return (
        <>
            <option
                value={questOption.value}>
                {questOption.option}
            </option>
        </>
    )
}

export default QSelect
