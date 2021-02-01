import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FormDataContext } from '../../service/context/formdata/FormData'
import API from '../../service/globalapi'
import FormSignup from './FormSignup'

export default function Signup() {

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [values, setValues, dataSms, setDataSms] = useContext(FormDataContext)

    const history = useHistory()
    const { passkey, email, noTujuan, pesan } = { ...dataSms }
    const txtPesan = `Hi ${values.username}!, Kamu telah menerima kode verifikasi : ${pesan}`
    const path = `https://reguler.medansms.co.id/sms_api.php?action=kirim_sms&email=${email}&passkey=${passkey}&no_tujuan=${values.phoneNumber}&pesan=${txtPesan}`

    function submitForm() {
        setIsSubmitted(true);
    }

    function submit(value) {
        if (value) {
            API.APISendSms(path)
            history.push('/verification-code')
        }
    }

    return (
        <>
            {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (submit(values))}
        </>
    )

}