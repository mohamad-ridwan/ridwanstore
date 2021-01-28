import React from 'react'
import './InputProfile.scss'

export default function InputProfile({ titleInput, type, value }) {
    return (
        <>
            <form action="" className="form-input-profile">
                <p className="title-input">
                    {titleInput}
                </p>

                <input type={type} className="input-profile" value={value} />

                <i className="fas fa-pencil-alt"></i>
            </form>
        </>
    )
}