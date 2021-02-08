import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import Popup from '../../components/popup/Popup'
import imgCeklis from '../../img/ceklis.svg'
import './VerifikasiCode.scss'
import { FormDataContext } from '../../service/context/formdata/FormData'
import Buttons from '../../components/buttons/Buttons'

const VerifikasiCode = () => {

    const [values, setValues, dataSms, setDataSms] = useContext(FormDataContext)
    const [popup, setPopup] = useState(false)
    const [popupSuccess, setPopupSuccess] = useState(false)

    const history = useHistory()

    const handleVerifikasi = (e) => {
        const check = e.target.value
        if (check === dataSms.pesan) {
            setPopup(true)
            postAPI()
        }
    }

    const postAPI = () => {
        fetch('http://localhost:6235/v13/signup/postsignup', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                phoneNumber: values.phoneNumber,
                password: values.password,
                confirmPassword: values.confirmPassword
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setTimeout(() => {
                        setPopup(false)
                        setPopupSuccess(true)
                    }, 3000)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="wrapp-verifikasi-code">
                <Headers
                    title={'Enter 6-Caracter'}
                    title2={'Verification Code'}
                    displayBack={'flex'}
                    flexDirectionBoxTitle={'column'}
                    bottomBack={'120px'}
                    clickBack={() => {
                        history.push('sign-up')
                    }} />

                <div className="container-verifikasi-code">
                    <p className="txt-verifikasi">
                        Code verifikasi telah di kirim ke nomer Hp tertuju. Copy dan paste kodemu disini
                    </p>
                    <p className="hl-phoneNumber">
                        <i className="fas fa-mobile"></i> {values.phoneNumber}
                    </p>

                    <input type="text" maxLength="6" className="input-verifikasi-code"
                        onChange={handleVerifikasi}
                    />

                    {/* <Buttons
                        displayLogoIcon={'none'}
                        heightBtn={'50px'}
                        textBtn={'Lanjut'}
                        marginBtn={'0px 0 20px 0'}
                        fontSizeBtn={'12pt'}
                        colorBtn={'#444'}
                        click={handle}
                    /> */}

                    <p className="resend-verifikasi-code">
                        Kirim ulang verifikasi code
                    </p>
                </div>

                <Popup
                    displayPopup={popup ? 'flex' : 'none'}
                    displayBtn={'none'}
                    txtLoading={'Loading...'} />
                <Popup
                    displayPopup={popupSuccess ? 'flex' : 'none'}
                    imgPopup={imgCeklis}
                    displayLoading={'none'}
                    displayImg={'flex'}
                    txtLoading={'Akun kamu berhasil di buat!'}
                    paddingBottomBoxWhite={'20px'}
                    click={() => {
                        history.push('/sign-in')
                    }}
                />
            </div>
        </>
    )
}

export default VerifikasiCode