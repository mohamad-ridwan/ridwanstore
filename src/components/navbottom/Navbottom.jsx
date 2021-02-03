import React from 'react'
import CardNav from './CardNav'
import './Navbottom.scss'

export default function Navbottom() {
    return (
        <>
            <div className="wrapp-nav-bottom">
                <CardNav
                    nameIcon={'home'}
                    nameBtn={'Home'}
                    to={'/'}
                />
                <CardNav
                    nameIcon={'shopping_cart'}
                    nameBtn={'Keranjang'}
                    to={'/keranjang'}
                />
                <CardNav
                    nameIcon={'notifications'}
                    nameBtn={'Notifikasi'}
                    to={'/notifikasi'}
                />
                <CardNav
                    nameIcon={'settings'}
                    nameBtn={'Setting'}
                    to={'/setting'}
                />
            </div>
        </>
    )
}