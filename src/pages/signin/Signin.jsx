import React, { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import FormInput from '../../components/forminput/FormInput'
import Headers from '../../components/headers/Headers'
import Popup from '../../components/popup/Popup'
import iconGoogle from '../../img/google.png'
import API from '../../service/globalapi'
import FormSignin from './FormSignin'
import './Signin.scss'
import ValidateSignin from './ValidateSignin'
import imgCeklis from '../../img/ceklis.svg'

export default function Signin() {

    const [showEye, setShowEye] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [displayError, setDisplayError] = useState(false)
    const [dataAllUser, setDataAllUser] = useState([])
    const [loadingSigninGoogle, setLoadingSigninGoogle] = useState(false)

    const { handleChange, values, handleSubmit, errors, errorSignin, loading } = FormSignin(ValidateSignin)

    const history = useHistory()

    const clientId = '904372258777-kfmajbgv8fj6u1juu05ql83ddsci4okj.apps.googleusercontent.com'

    const setAllAPI = () => {
        API.APIGetAllUser()
            .then(res => {
                setDataAllUser(res.data)
            })
    }

    function signInGoogle(data) {
        API.APISigninGoogle(data)
            .then(res => {
                if (res) {
                    const result = res.data
                    localStorage.setItem('userId', JSON.stringify({ _id: result._id }))
                    setLoadingSigninGoogle(false)
                    history.push('/')
                }
            }, (err) => {
                setErrorMessage('Terjadi kesalahan server, mohon coba beberapa saat lagi!')
                setDisplayError(true)
                return err
            })

        return data
    }

    function postSignup(res) {
        const dataPost = {
            idUser: res.googleId,
            username: res.name,
            email: res.email,
            phoneNumber: '-',
            password: 'non-password',
            confirmPassword: 'non-password',
            googleId: res.googleId,
            givenName: res.givenName,
            familyName: res.familyName,
            name: res.name,
            emailGoogle: res.email,
            imageUrl: res.imageUrl
        }
        const dataSigninGoogle = {
            idUser: res.googleId,
            username: res.name
        }
        const checkIdUser = dataAllUser.filter(e => e.idUser === dataPost.idUser)
        if (checkIdUser.length === 0) {
            API.APIPostSignup(dataPost)
                .then(result => {
                    if (result) {
                        const response = result.signup
                        localStorage.setItem('userId', JSON.stringify({ _id: response._id }))
                        setLoadingSigninGoogle(false)
                        history.push('/')
                    }
                }, (err) => {
                    setErrorMessage('Terjadi kesalahan server, mohon coba beberapa saat lagi!')
                    setDisplayError(true)
                    setLoadingSigninGoogle(false)
                    return err;
                })
        } else {
            signInGoogle(dataSigninGoogle);
        }
    }

    const responseGoogle = (res) => {
        const result = res.profileObj
        postSignup(result)
    }

    useEffect(() => {
        setAllAPI()
    }, [])

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

                        {/* <Buttons
                            heightBtn={'40px'}
                            textBtn={'Log in with Google'}
                            marginBtn={'40px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            fontWeightBtn={'500'}
                            colorBtn={'#aaa'}
                            bgColorBtn={'#fff'}
                            logoIcon={iconGoogle}
                        /> */}

                        <GoogleLogin className={'btn-login-google'}
                            clientId={clientId}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                        >
                        </GoogleLogin>
                    </div>
                </div>

                <Popup
                    displayPopup={loading || loadingSigninGoogle ? 'flex' : 'none'}
                    displayBtn={'none'}
                    txtLoading={'Loading...'} />

                <Popup
                    displayPopup={displayError ? 'flex' : 'none'}
                    imgPopup={imgCeklis}
                    displayLoading={'none'}
                    displayImg={'flex'}
                    txtLoading={errorMessage}
                    paddingBottomBoxWhite={'20px'}
                    textBtn={'Oke'}
                    click={() => setDisplayError(false)}
                />
            </div>
        </>
    )
}