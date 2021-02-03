import React from 'react'
import './MessageInfo.scss'

export default function MessageInfo({ message, imgMessage }) {
    return (
        <>
            <div className="container-info-message">
                <img src={imgMessage} alt="" className="img-info" />
                <p className="message-info">
                    {message}
                </p>
            </div>
        </>
    )
}