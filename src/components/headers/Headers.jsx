import React from 'react'
import './Headers.scss'

export default function Headers({ title, displayBack, clickBack, title2, flexDirectionBoxTitle, bottomBack, heightHeader, imgProfil, displayImgProfil, displayFormSearch, placeholderSearch, clickProfile, changeSearch, valueSearch }) {
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

                <img src={imgProfil} alt="" className="img-profile" style={{
                    display: `${displayImgProfil}`
                }}
                    onClick={clickProfile}
                />
                <form action="" className="form-search" style={{
                    display: `${displayFormSearch}`
                }}>
                    <i className="fas fa-search"></i>
                    <input type="text" className="input-search"
                        value={valueSearch}
                        placeholder={placeholderSearch}
                        onChange={changeSearch}
                    />
                </form>
            </div>
        </>
    )
}