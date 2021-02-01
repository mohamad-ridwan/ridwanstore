import React, { createContext, useState } from 'react'

export const FormDataContext = createContext()

const FormDataProvider = ({ children }) => {

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
        pesan: `${new Date().getTime()}`
    })

    return (
        <FormDataContext.Provider value={[values, setValues, dataSms, setDataSms]}>
            {children}
        </FormDataContext.Provider>
    )
}

export default FormDataProvider