import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuKategori.scss'

export default function MenuKategori({ titleMenu, clickPage, toPage }) {
    return (
        <>
            <NavLink to={toPage} className={'wrapp-menu-kategori'} activeClassName={'active'}
                onClick={clickPage}
            >
                {titleMenu}
            </NavLink>
        </>
    )
}