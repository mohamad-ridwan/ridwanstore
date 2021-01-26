import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import FormInput from '../../components/forminput/FormInput'
import Headers from '../../components/headers/Headers'
import iconGoogle from '../../img/google.png'
import './Signin.scss'


export default function Signin() {
    return (
        <>
            <div className="wrapp-signIn">
                <Headers title={'Sign in'} />

                <div className="container1-signIn">
                    <form action="" className="form-input">
                        <FormInput
                            displayEye={'none'}
                            type={'text'}
                            placeholder={'Email'}
                        />
                        <FormInput
                            type={'password'}
                            placeholder={'Password'}
                        />

                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={'Sign In'}
                            marginBtn={'40px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={'#444'}
                        />
                    </form>
                    <div className="column-bawah">
                        <p className="txt-sign-up">
                            Sign up
                        </p>

                        <Buttons
                            heightBtn={'40px'}
                            textBtn={'Log in with Google'}
                            marginBtn={'40px 0 0 0'}
                            fontSizeBtn={'12pt'}
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