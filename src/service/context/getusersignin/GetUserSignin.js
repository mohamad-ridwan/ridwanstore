import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import API from '../../globalapi';

export const GetUserSigninContext = createContext()

const GetUserSigninProvider = ({ children }) => {

    return (
        <GetUserSigninContext.Provider>
            {children}
        </GetUserSigninContext.Provider>
    )
}

export default GetUserSigninProvider