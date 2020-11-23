import React from 'react'
import QSelect from "./QSelect"

const Questions = ({ handleGradeTotal, questData, index, newStyle }) => {

    // const errorStyle = {
    //     borderColor: "red"
    // }

    return (
        <>
            <div className="col-lg-6" key={index}>
                <div className="input-group mb-5">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm" style={{ width: "90px" }}>{`Question ${index + 1}`}</span>
                    </div>
                    <select
                        id="inputState"
                        defaultValue="default"
                        onChange={handleGradeTotal}
                        className="form-control">

                        <option
                            disabled
                            value="default">{questData.question}
                        </option>

                        {questData.options.map((questOption, i) => {
                            return (
                                <QSelect key={i} questOption={questOption} />
                            )
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Questions
