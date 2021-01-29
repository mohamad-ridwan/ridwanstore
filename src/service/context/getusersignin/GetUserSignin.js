import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import API from '../../globalapi';

export const GetUserSigninContext = createContext()

const GetUserSigninProvider = ({ children }) => {

    const [getDataUser, setGetDataUser] = useState({})

    const getDataUserAPI = () => {
        const getStorage = JSON.parse(localStorage.getItem('userData'))
        API.APIGetDataUser(getStorage ? getStorage._id : '')
            .then(res => {
                setGetDataUser(res)
            })
    }

    useEffect(() => {
        getDataUserAPI()
    }, [])

    return (
        <GetUserSigninContext.Provider value={[getDataUser, setGetDataUser]}>
            {children}
        </GetUserSigninContext.Provider>
    )
}

export default GetUserSigninProvider