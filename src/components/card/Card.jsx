import React from 'react'
import './Card.scss'

export default function Card({ imgCard, price, name, stock }) {
    return (
        <>
            <div className="box-card">
                <img src={imgCard} alt="" className="img-card" />
                <p className="price">
                    Rp{price}
                </p>
                <p className="name-makaroni">
                    {name}
                </p>
                <p className="stock">
                    Stock ({stock})
            </p>
            </div>
        </>
    )
}