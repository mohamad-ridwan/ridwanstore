import React from 'react'
import './Headers.scss'

export default function Headers({ title }) {
    return (
        <>
            <div className="wrapp-headers">
                <div className="circle-header">

                </div>
                <p className="title-header">
                    {title}
                </p>
            </div>
        </>
    )
}