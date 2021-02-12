import React from 'react'
import './FormInput.scss'

export default function FormInput({ type, value, placeholder, change, displayEye, clickEye, colorEye, nameInput, onSubmit, displayWarningPassword, txtWarningPassword, displayFormInput }) {
    return (
        <>
            <div className="box-formInput" style={{
                display: `${displayFormInput}`
            }}>
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
                    {txtWarningPassword}
                </p>
            </div>
        </>
    )
}