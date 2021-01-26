import React from 'react'
import './Buttons.scss'

export default function Buttons({ textBtn, click, heightBtn, bgColorBtn, marginBtn, fontSizeBtn, colorBtn, logoIcon, displayLogoIcon }) {
    return (
        <>
            <button className="buttons" onClick={click} style={{
                height: `${heightBtn}`,
                backgroundColor: `${bgColorBtn}`,
                margin: `${marginBtn}`,
                fontSize: `${fontSizeBtn}`,
                color: `${colorBtn}`
            }}>
                <img src={logoIcon} alt="" className="logo-icon" style={{
                    display: `${displayLogoIcon}`
                }} /> {textBtn}
            </button>
        </>
    )
}