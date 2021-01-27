import React from 'react'
import './Buttons.scss'

export default function Buttons({ textBtn, click, heightBtn, bgColorBtn, marginBtn, fontSizeBtn, colorBtn, logoIcon, displayLogoIcon, fontWeightBtn, displayBtn }) {
    return (
        <>
            <button className="buttons" onClick={click} style={{
                display: `${displayBtn}`,
                height: `${heightBtn}`,
                backgroundColor: `${bgColorBtn}`,
                margin: `${marginBtn}`,
                fontSize: `${fontSizeBtn}`,
                color: `${colorBtn}`,
                fontWeight: `${fontWeightBtn}`
            }}>
                <img src={logoIcon} alt="" className="logo-icon" style={{
                    display: `${displayLogoIcon}`
                }} /> {textBtn}
            </button>
        </>
    )
}