import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import Popup from '../../components/popup/Popup'
import imgCeklis from '../../img/ceklis.svg'
import './VerifikasiCode.scss'
import { FormDataContext } from '../../service/context/formdata/FormData'
import API from '../../service/globalapi'

export default function VerifikasiCode() {

    const [popup, setPopup] = useState(false)
    const [popupSuccess, setPopupSuccess] = useState(false)
    const [values, setValues, dataSms, setDataSms] = useContext(FormDataContext)

    const history = useHistory()

    const handleVerifikasi = (e) => {
        const check = e.target.value
        if (check === dataSms.pesan) {
            setPopup(true)
            setTimeout(() => {
                API.APISignup(...values)
                    .then(res => {
                        if (res) {
                            setPopup(false)
                            setPopupSuccess(true)
                        }
                    })
            }, 3000)
        }
    }

    return (
        <>
            <div className="wrapp-verifikasi-code">
                <Headers
                    title={'Enter 5-digit'}
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

                    <input type="tel" className="input-verifikasi-code"
                        onChange={handleVerifikasi}
                    />

                    {/* <Buttons
                        displayLogoIcon={'none'}
                        heightBtn={'50px'}
                        textBtn={'Lanjut'}
                        marginBtn={'0px 0 20px 0'}
                        fontSizeBtn={'12pt'}
                        colorBtn={'#444'}
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