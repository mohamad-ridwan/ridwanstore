import React, { createContext, useState } from 'react'

export const SignupContext = createContext()

const SignupProvider = ({ children }) => {

    const [nomerHp, setNomerHp] = useState('081383959452')
    const [verifikasiCode, setVerifikasiCode] = useState('12345')

    return (
        <SignupContext.Provider value={[nomerHp, setNomerHp, verifikasiCode, setVerifikasiCode]}>
            {children}
        </SignupContext.Provider>
    )
}

export default SignupProvider

