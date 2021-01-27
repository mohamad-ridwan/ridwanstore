import React from 'react'
import './Headers.scss'

export default function Headers({ title, displayBack, clickBack, title2, flexDirectionBoxTitle, bottomBack, heightHeader, imgProfil }) {
    return (
        <>
            <div className="wrapp-headers" style={{
                height: `${heightHeader}`
            }}>
                <div className="circle-header">

                </div>
                <span className="material-icons btnBack" style={{
                    display: `${displayBack}`,
                    bottom: `${bottomBack}`
                }} onClick={clickBack}>
                    arrow_back_ios
                </span>
                <div className="box-title-header"
                    style={{
                        flexDirection: `${flexDirectionBoxTitle}`
                    }}
                >
                    <p className="title-header">
                        {title}
                    </p>
                    <p className="title-header2">
                        {title2}
                    </p>
                </div>

                <img src={imgProfil} alt="" className="img-profile" />
            </div>
        </>
    )
}