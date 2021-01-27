import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import FormInput from '../../components/forminput/FormInput'
import Headers from '../../components/headers/Headers'
import './Signup.scss'

export default function Signup() {

    const [showEye, setShowEye] = useState(false)

    const history = useHistory()

    return (
        <>
            <div className="wrapp-signUp">
                <Headers title={'Sign up'} displayBack={'flex'} clickBack={() => {
                    history.push('/sign-in')
                }} />

                <div className="container1-signUp">
                    <form action="" className="form-input-signUp">
                        <FormInput
                            displayEye={'none'}
                            type={'text'}
                            placeholder={'Username'}
                        />
                        <FormInput
                            displayEye={'none'}
                            type={'email'}
                            placeholder={'Email'}
                        />
                        <FormInput
                            displayEye={'none'}
                            type={'number'}
                            placeholder={'Phone number'}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            colorEye={showEye ? '   #f7cf64' : '#ddd'}
                            placeholder={'Password'}
                            clickEye={() => { setShowEye(!showEye) }}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            colorEye={showEye ? '#f7cf64' : '#ddd'}
                            placeholder={'Confirm password'}
                            clickEye={() => { setShowEye(!showEye) }}
                        />
                    </form>
                    <div className="column-bawah-signUp">
                        <div className="column-agree">
                            <input type="checkbox" name="" id="" className='checkbox' />
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
                            click={() => {
                                history.push('/verification-code')
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}