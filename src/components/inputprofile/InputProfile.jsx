import React from 'react'
import './InputProfile.scss'

export default function InputProfile({ titleInput, type, txtInput, clickPencil }) {
    return (
        <>
            <form action="" className="form-input-profile">
                <p className="title-input">
                    {titleInput}
                </p>

                <p className="input-profile">
                    {txtInput}
                </p>

                <i className="fas fa-pencil-alt" onClick={clickPencil}></i>
            </form>
        </>
    )
}