import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Buttons from '../../components/buttons/Buttons';
import FormInput from '../../components/forminput/FormInput';
import Headers from '../../components/headers/Headers';
import ValidateInfo from './ValidateInfo';
import './FormSignup.scss'
import useForm from './useForm';

export default function FormSignup({ submitForm }) {

    const [showEye, setShowEye] = useState(false)

    const history = useHistory()
    const { handleChange, values, handleSubmit, errors, isSubmitting } = useForm(submitForm, ValidateInfo);

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
                    </form>
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
                </div>
            </div>
        </>
    )
}