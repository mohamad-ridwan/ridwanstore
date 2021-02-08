import React, { createContext, useState } from 'react'
import BuildCaptcha from '../../../pages/signup/BuildCaptcha'

export const FormDataContext = createContext()

const FormDataProvider = ({ children }) => {

    const theCaptcha = BuildCaptcha()

    const [values, setValues] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const [dataSms, setDataSms] = useState({
        passkey: 'Hm123123',
        email: 'mr643062@gmail.com',
        noTujuan: values.phoneNumber,
        pesan: `${theCaptcha.theCaptcha}`
    })

    return (
        <FormDataContext.Provider value={[values, setValues, dataSms, setDataSms]}>
            {children}
        </FormDataContext.Provider>
    )
}

export default FormDataProvider