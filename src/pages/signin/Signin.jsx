import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import FormInput from '../../components/forminput/FormInput'
import Headers from '../../components/headers/Headers'
import iconGoogle from '../../img/google.png'
import './Signin.scss'


export default function Signin() {

    const [showEye, setShowEye] = useState(false)

    const history = useHistory()

    return (
        <>
            <div className="wrapp-signIn">
                <Headers title={'Sign in'} />

                <div className="container1-signIn">
                    <form action="" className="form-input">
                        <FormInput
                            displayEye={'none'}
                            type={'email'}
                            placeholder={'Email'}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            placeholder={'Password'}
                            colorEye={showEye ? '#f7cf64' : '#ddd'}
                            clickEye={() => { setShowEye(!showEye) }}
                        />

                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={'Sign in'}
                            marginBtn={'40px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={'#444'}
                            click={() => {
                                history.push('/')
                            }}
                        />
                    </form>
                    <div className="column-bawah">
                        <p className="txt-sign-up" onClick={() => {
                            history.push('/sign-up')
                        }}>
                            Sign up
                        </p>

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