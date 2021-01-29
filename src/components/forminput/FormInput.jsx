import React from 'react'
import './FormInput.scss'

export default function FormInput({ type, value, placeholder, change, displayEye, clickEye, colorEye, nameInput, onSubmit, displayWarningPassword }) {
    return (
        <>
            <form className="box-formInput" onSubmit={onSubmit}>
                <input type={type} name={nameInput} className="input-column" value={value} placeholder={placeholder} onChange={change} />

                <i className="fas fa-eye" style={{
                    display: `${displayEye}`,
                    color: `${colorEye}`
                }}
                    onClick={clickEye}
                ></i>

                <p className="warning-password" style={{
                    display: `${displayWarningPassword}`
                }}>
                    Minimal 4 karakter!
                </p>
            </form>
        </>
    )
}