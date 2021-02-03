import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import FormInput from '../../components/forminput/FormInput'
import Headers from '../../components/headers/Headers'
import iconGoogle from '../../img/google.png'
import FormSignin from './FormSignin'
import './Signin.scss'
import ValidateSignin from './ValidateSignin'

export default function Signin() {

    const [showEye, setShowEye] = useState(false)

    const { handleChange, values, handleSubmit, errors, errorSignin } = FormSignin(ValidateSignin)

    const history = useHistory()

    return (
        <>
            <div className="wrapp-signIn">
                <Headers title={'Sign in'} />

                <div className="container1-signIn">
                    <form className="form-input" onSubmit={handleSubmit}>
                        <FormInput
                            displayEye={'none'}
                            type={'text'}
                            placeholder={'Username'}
                            nameInput={'username'}
                            displayWarningPassword={'flex'}
                            txtWarningPassword={errors && errors.username}
                            onSubmit={handleSubmit}
                            value={values.username}
                            change={handleChange}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            placeholder={'Password'}
                            nameInput={'password'}
                            colorEye={showEye ? '#f7cf64' : '#ddd'}
                            displayWarningPassword={'flex'}
                            txtWarningPassword={errors && errors.password}
                            onSubmit={handleSubmit}
                            value={values.password}
                            change={handleChange}
                            clickEye={() => { setShowEye(!showEye) }}
                        />

                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={'Sign in'}
                            marginBtn={'40px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={'#444'}
                        />
                        <p className="txt-error-signin">
                            {errorSignin}
                        </p>
                    </form>
                    <div className="column-bawah">
                        <div className="column-sign-up">
                            <p className="tanya">
                                Belum punya akun?
                            </p>
                            <p className="txt-sign-up" onClick={() => {
                                history.push('/sign-up')
                            }}>
                                Sign up
                            </p>
                        </div>

                        <Buttons
                            heightBtn={'40px'}
                            textBtn={'Log in with Google'}
                            marginBtn={'40px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            fontWeightBtn={'500'}
                            colorBtn={'#aaa'}
                            bgColorBtn={'#fff'}
                            logoIcon={iconGoogle}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}