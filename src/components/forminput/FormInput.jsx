import React from 'react'
import './FormInput.scss'

export default function FormInput({ type, value, placeholder, change, displayEye }) {
    return (
        <>
            <form className="box-formInput">
                <input type={type} className="input-column" value={value} placeholder={placeholder} onChange={change} />

                <i className="fas fa-eye" style={{
                    display: `${displayEye}`
                }}></i>
            </form>
        </>
    )
}