import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuKategori.scss'

export default function MenuKategori({ titleMenu }) {
    return (
        <>
            <NavLink to={'/all-product'} className={'wrapp-menu-kategori'} activeClassName={'active'}>
                {titleMenu}
            </NavLink>
        </>
    )
}