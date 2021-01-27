import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import Headers from '../../components/headers/Headers'
import Popup from '../../components/popup/Popup'
import { SignupContext } from '../../service/context/signup/Signup'
import imgCeklis from '../../img/ceklis.svg'
import './VerifikasiCode.scss'

export default function VerifikasiCode() {

    const [nomerHp, setNomerHp, verifikasiCode, setVerifikasiCode] = useContext(SignupContext)
    const [popup, setPopup] = useState(false)
    const [popupSuccess, setPopupSuccess] = useState(false)

    const history = useHistory()

    const handleVerifikasi = (e) => {
        const check = e.target.value
        if (check.length > 4) {
            if (check === verifikasiCode) {
                setPopup(true)
                setTimeout(() => {
                    setPopup(false)
                    setPopupSuccess(true)
                }, 3000)
            }
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
                        Code verifikasi telah di kirim ke nomer Hp ({nomerHp}). Mohon untuk masukkan kode
                    </p>

                    <input type="tel" maxLength='5' className="input-verifikasi-code"
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