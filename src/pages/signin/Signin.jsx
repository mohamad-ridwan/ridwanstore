import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import FormInput from '../../components/forminput/FormInput'
import Headers from '../../components/headers/Headers'
import iconGoogle from '../../img/google.png'
import API from '../../service/globalapi'
import './Signin.scss'

export default function Signin() {

    const [showEye, setShowEye] = useState(false)
    const [inputLogin, setInputLogin] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()

    const handleChange = (e) => {
        const value = e.target.value
        let newInputLogin = { ...inputLogin }
        newInputLogin[e.target.name] = value
        setInputLogin(newInputLogin)
    }

    const handleSubmit = (e) => {
        e.stopPropagation()
        e.preventDefault()
        API.APIGetUserSignin(inputLogin.username, inputLogin.password)
            .then((res) => {
                if (res) {
                    const result = res.data
                    if (result) {
                        localStorage.setItem('userData', JSON.stringify({ _id: result._id }))
                        history.push('/')
                    }
                }
            }, (err) => {
                console.log('error sign in :', err)
            })
    }

    return (
        <>
            <div className="wrapp-signIn">
                <Headers title={'Sign in'} />

                <div className="container1-signIn">
                    <form action="" className="form-input">
                        <FormInput
                            displayEye={'none'}
                            type={'text'}
                            placeholder={'Username'}
                            nameInput={'username'}
                            onSubmit={handleSubmit}
                            change={handleChange}
                        />
                        <FormInput
                            type={showEye ? 'text' : 'password'}
                            placeholder={'Password'}
                            nameInput={'password'}
                            colorEye={showEye ? '#f7cf64' : '#ddd'}
                            onSubmit={handleSubmit}
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
                            click={handleSubmit}
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