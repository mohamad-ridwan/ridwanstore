import React, { createContext, useEffect, useState } from 'react'
import API from '../../globalapi'

export const KeranjangContext = createContext()

const KeranjangProvider = ({ children }) => {

    // INI BERLAKU UNTUK DETAIL PRODUCT AJA

    const [data, setData] = useState([])

    const userId = JSON.parse(localStorage.getItem('userId'))
    const get = userId && userId._id

    const setAllAPI = () => {
        // API.APIGetKeranjang(get)
        //     .then(res => {
        //         const check = res.data.every((e) => e.idUser === get)
        //         if (check) {
        //             setData(res.data)
        //         }
        //     })
    }

    // useEffect(() => {
    //     setAllAPI();
    // }, [])

    return (
        <KeranjangContext.Provider value={[data, setData, setAllAPI]}>
            {children}
        </KeranjangContext.Provider>
    )
}

export default KeranjangProvider