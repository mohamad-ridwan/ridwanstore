import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Buttons from '../../components/buttons/Buttons';
import FormInput from '../../components/forminput/FormInput';
import Headers from '../../components/headers/Headers';
import './FormSignup.scss'
import { FormDataContext } from '../../service/context/formdata/FormData';
import BuildCaptcha from './BuildCaptcha';
import axios from 'axios';

const FormSignup = () => {

    const theCaptcha = BuildCaptcha()

    const [values, setValues, dataSms, setDataSms] = useContext(FormDataContext)
    const [showEye, setShowEye] = useState(false)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const history = useHistory()

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const validate = (values) => {
        let errors = {}

        if (!values.username) {
            errors.username = 'Wajib di isi!'
        }

        if (!values.email) {
            errors.email = 'Wajib di isi!'
        } else if (!values.email.includes('@gmail.com')) {
            errors.email = `Harus berupa '@gmail.com' !`
        }

        if (!values.phoneNumber) {
            errors.phoneNumber = 'Wajib di isi!'
        }

        if (!values.password) {
            errors.password = 'Wajib di isi!'
        } else if (values.password.length < 4) {
            errors.password = 'Minimal 4 karakter!'
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Wajib di isi!'
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Tidak konfirmasi password!'
        }

        return errors;
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
    }

    const handleSendSMS = async () => {
        const passKey = 'Hm123123'
        const path = `https://reguler.medansms.co.id/sms_api.php?action=kirim_sms&email=${dataSms.email}&passkey=${passKey}&no_tujuan=${values.phoneNumber}&pesan=Kode verifikasi : ${dataSms.pesan}`
        await new Promise((resolve, reject) => {
            axios.post(`${path}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    kodeVerifikasi: dataSms.pesan
                }
            })
                .then(res => {
                    const responsData = {
                        status: res.data.status,
                        statusText: res.data.statusText,
                        data: res.data.config.data
                    }
                    resolve(console.log(responsData))
                })
                .catch(err => reject(console.log(err)))
        })
    }

    if (Object.keys(errors).length === 0 && isSubmitting) {
        history.push('/verification-code')
        handleSendSMS();
    }

    return (
        <>
            <div className="wrapp-signUp">
                <Headers title={'Sign up'} displayBack={'flex'} clickBack={() => {
                    history.push('/sign-in')
                }} />

                <form className="container1-signUp" onSubmit={handleSubmit}>
                    <div className="form-input-signUp">
                        <FormInput
                            displayEye={'none'}
                            type={'text'}
                            placeholder={'Username'}
                            nameInput={'username'}
                            txtWarningPassword={errors.username}
                            displayWarningPassword={'flex'}
                            value={values.username}
                            change={handleChange}
                        />
                        <FormInput
                            displayEye={'none'}
                            type={'email'}
                            placeholder={'Email'}
                            nameInput={'email'}
                            txtWarningPassword={errors.email}
                            displayWarningPassword={'flex'}
                            value={values.email}
                            change={handleChange}
                        />
                        <FormInput
                            displayEye={'none'}
                            type={'number'}
                            placeholder={'Phone number'}
                            nameInput={'phoneNumber'}
                            txtWarningPassword={errors.phoneNumber}
                            displayWarningPassword={'flex'}
                            value={values.phoneNumber}
                            change={handleChange}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            colorEye={showEye ? '   #f7cf64' : '#ddd'}
                            placeholder={'Password'}
                            nameInput={'password'}
                            txtWarningPassword={errors.password}
                            displayWarningPassword={'flex'}
                            value={values.password}
                            change={handleChange}
                            clickEye={() => { setShowEye(!showEye) }}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            colorEye={showEye ? '#f7cf64' : '#ddd'}
                            placeholder={'Confirm password'}
                            nameInput={'confirmPassword'}
                            txtWarningPassword={errors.confirmPassword}
                            displayWarningPassword={'flex'}
                            value={values.confirmPassword}
                            change={handleChange}
                            clickEye={() => { setShowEye(!showEye) }}
                        // onSubmit={handleSubmit}
                        />
                    </div>
                    <div className="column-bawah-signUp">
                        {/* <div className="column-agree">
                            <input type="checkbox" name="" id="" className='checkbox' onClick={() => {
                                setCheckBox(!checkBox)
                                setCheckBox2(!checkBox2)
                            }} />
                            <p className="txt-agree">
                                I have read and agree
                            </p>
                            <p className="txt-agree2">
                                the Term and Conditions
                            </p>
                        </div>
                        <p className="warning-checkbox" style={{
                            display: `${checkBox ? 'flex' : 'none'}`
                        }}>
                            Mohon setujui persyaratan!
                        </p> */}

                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={'Sign up'}
                            marginBtn={'40px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={'#444'}
                            bgColorBtn={'#fdc426'}
                            classNameBtn={'buttons'}
                            click={handleSubmit}
                        />
                    </div>
                </form>
            </div>

        </>
    )
}

export default FormSignup