import React from 'react'
import { NavLink } from 'react-router-dom'
import './CardNav.scss'

export default function CardNav({ nameIcon, to, nameBtn, displayTotalKeranjang, total }) {
    return (
        <>
            <div className="wrapp-btn-navBottom">
                <NavLink to={to} className='btn-navBottom' activeClassName={'active-btn-nav'}>
                    <span class="material-icons">
                        {nameIcon}


                    </span>
                    <p className="notif-total-keranjang" style={{
                        display: `${displayTotalKeranjang}`
                    }}>
                        {total}
                    </p>

                    <p className="name-btn-nav">
                        {nameBtn}
                    </p>
                </NavLink>
            </div>

        </>
    )
}