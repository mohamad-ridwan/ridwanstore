import React from 'react'
import './HeaderCard.scss'

export default function HeaderCard({ titleCard, lihatSemua, toLihatSemua }) {
    return (
        <>
            <div className="header-card">
                <p className="title-card">
                    {titleCard}
                </p>
                <p className="lihat-semua" onClick={toLihatSemua}>
                    {lihatSemua}
                </p>
            </div>
        </>
    )
}