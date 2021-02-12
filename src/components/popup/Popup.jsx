import React from 'react'
import Buttons from '../buttons/Buttons'
import './Popup.scss'

export default function Popup({ txtLoading, displayPopup, imgPopup, displayImg, displayLoading, displayBtn, paddingBottomBoxWhite, click, wrappPosition, textBtn }) {
    return (
        <>
            <div className="wrapp-popup" style={{
                display: `${displayPopup}`,
                position: `${wrappPosition}`
            }}>
                <div className="box-white" style={{
                    paddingBottom: `${paddingBottomBoxWhite}`
                }}>
                    <div className="loading-spinner" style={{
                        display: `${displayLoading}`
                    }}>

                    </div>
                    <img src={imgPopup} alt="" className="img-pop" style={{
                        display: `${displayImg}`
                    }} />
                    <p className="txt-loading">
                        {txtLoading}
                    </p>

                    <Buttons
                        displayBtn={displayBtn}
                        displayLogoIcon={'none'}
                        heightBtn={'50px'}
                        textBtn={textBtn}
                        marginBtn={'40px 0 0 0'}
                        fontSizeBtn={'12pt'}
                        colorBtn={'#444'}
                        click={click}
                    />
                </div>
            </div>
        </>
    )
}