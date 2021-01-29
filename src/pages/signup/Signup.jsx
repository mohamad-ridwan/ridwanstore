import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import FormInput from '../../components/forminput/FormInput'
import Headers from '../../components/headers/Headers'
import './Signup.scss'

export default function Signup() {

    const [showEye, setShowEye] = useState(false)
    const [showWarning, setShowWarning] = useState(false)
    const [checkBox, setCheckBox] = useState(false)
    const [inputSignup, setInputSignup] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const history = useHistory()

    const handleSubmit = (e) => {
        e.stopPropagation()
        const button = document.querySelector('.buttons')
        const disable = document.querySelector('.disable')
        if (button && !disable) {
            if (checkBox) {
                console.log(inputSignup)
                return inputSignup
            }
        }
        e.preventDefault()
    }

    return (
        <>
            <div className="wrapp-signUp">
                <Headers title={'Sign up'} displayBack={'flex'} clickBack={() => {
                    history.push('/sign-in')
                }} />

                <div className="container1-signUp">
                    <form className="form-input-signUp" onSubmit={handleSubmit}>
                        <FormInput
                            displayEye={'none'}
                            type={'text'}
                            placeholder={'Username'}
                            nameInput={'username'}
                            change={(e) => {
                                setInputSignup({
                                    ...inputSignup,
                                    username: e.target.value
                                })
                            }}
                        />
                        <FormInput
                            displayEye={'none'}
                            type={'email'}
                            placeholder={'Email'}
                            nameInput={'email'}
                            change={(e) => {
                                setInputSignup({
                                    ...inputSignup,
                                    email: e.target.value
                                })
                            }}
                        />
                        <FormInput
                            displayEye={'none'}
                            type={'number'}
                            placeholder={'Phone number'}
                            nameInput={'phoneNumber'}
                            change={(e) => {
                                setInputSignup({
                                    ...inputSignup,
                                    phoneNumber: e.target.value
                                })
                            }}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            colorEye={showEye ? '   #f7cf64' : '#ddd'}
                            placeholder={'Password'}
                            nameInput={'password'}
                            displayWarningPassword={showWarning ? 'flex' : 'none'}
                            change={(e) => {
                                const value = e.target.value
                                const confirmPassword = inputSignup.confirmPassword
                                const result = value == confirmPassword
                                const button = document.querySelector('.buttons')
                                if (value.length >= 4) {
                                    setShowWarning(false)
                                    if (result) {
                                        button.classList.remove('disable')
                                        button.style.backgroundColor = '#fdc426'
                                    } else {
                                        button.classList.add('disable')
                                        button.style.backgroundColor = '#ddd'
                                    }
                                } else {
                                    setShowWarning(true)
                                    button.classList.add('disable')
                                    button.style.backgroundColor = '#ddd'
                                }
                                setInputSignup({
                                    ...inputSignup,
                                    password: value
                                })
                            }}
                            clickEye={() => { setShowEye(!showEye) }}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            colorEye={showEye ? '#f7cf64' : '#ddd'}
                            placeholder={'Confirm password'}
                            nameInput={'confirmPassword'}
                            change={(e) => {
                                const value = e.target.value
                                const button = document.querySelector('.buttons')
                                if (inputSignup.password === value) {
                                    button.classList.remove('disable')
                                    button.style.backgroundColor = '#fdc426'
                                } else {
                                    button.classList.add('disable')
                                    button.style.backgroundColor = '#ddd'
                                }
                                setInputSignup({
                                    ...inputSignup,
                                    confirmPassword: value
                                })
                            }}
                            clickEye={() => { setShowEye(!showEye) }}
                            onSubmit={handleSubmit}
                        />
                    </form>
                    <div className="column-bawah-signUp">
                        <div className="column-agree">
                            <input type="checkbox" name="" id="" className='checkbox' onClick={() => setCheckBox(!checkBox)} />
                            <p className="txt-agree">
                                I have read and agree
                            </p>
                            <p className="txt-agree2">
                                the Term and Conditions
                            </p>
                        </div>

                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={'Sign up'}
                            marginBtn={'40px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={'#444'}
                            bgColorBtn={'#ddd'}
                            classNameBtn={'disable'}
                            click={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}