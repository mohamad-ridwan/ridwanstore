import react, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import InputProfile from '../../components/inputprofile/InputProfile'
import ModalUpdate from '../../components/modalupdate/ModalUpdate'
import Popup from '../../components/popup/Popup'
import API from '../../service/globalapi'
import imgCeklis from '../../img/ceklis.svg'
import './UbahPassword.scss'

const UbahPassword = () => {

    const [dataUser, setDataUser] = useState({})
    const [displayPassword, setDisplayPassword] = useState(false)
    const [eye, setEye] = useState(false)
    const [eye2, setEye2] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [loadingUpdate, setLoadingUpdate] = useState(false)
    const [popupSuccess, setPopupSuccess] = useState(false)
    const [bgColorBtn, setBgColorBtn] = useState(false)
    const [errors, setErrors] = useState({})
    const [dataUpdate, setDataUpdate] = useState({
        password: '',
        confirmPassword: ''
    })

    const history = useHistory()

    const setAllAPI = () => {
        const getStorage = JSON.parse(localStorage.getItem('userId'))
        API.APIGetDataUser(getStorage ? getStorage._id : '')
            .then((res) => {
                if (res) {
                    setDataUser(res)
                }
            })
            .catch(err => {
                history.push('/sign-in')
                return err;
            })
    }

    const changePassword = (e) => {
        const value = e.target.value
        let newData = { ...dataUpdate }
        newData[e.target.name] = value
        setDataUpdate(newData)
        // handle button oke
        const { password, confirmPassword } = { ...dataUser }

        if (!value) {
            setBgColorBtn(false)
        }
        if (value.length > 3) {
            setBgColorBtn(true)
        } else if (value.length < 4) {
            setBgColorBtn(false)
        }
        if (value === password) {
            setBgColorBtn(false)
        }
        if (value === confirmPassword) {
            setBgColorBtn(false)
        }
    }

    const validateForm = (data) => {
        let errors = {}

        if (!data.password) {
            errors.password = ''
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = ''
        }
        if (data.password.length > 0 && data.password.length < 4) {
            errors.password = 'Minimal 4 karakter!'
        }
        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Tidak konfirmasi password baru!'
        }

        return errors;
    }

    const handleOke = (e) => {
        e.preventDefault()
        const { password, confirmPassword } = { ...dataUpdate }
        if (password !== dataUser.password && confirmPassword !== dataUser.confirmPassword) {
            setErrors(validateForm(dataUpdate))
            setSubmit(true)
        }
    }

    function updateAPIPassword() {
        const getStorage = JSON.parse(localStorage.getItem('userId'))
        API.APIUpdatePassword(getStorage._id, dataUpdate)
            .then(res => {
                setLoadingUpdate(true)
                setDisplayPassword(false)
                setTimeout(() => {
                    if (res) {
                        setLoadingUpdate(false)
                        setPopupSuccess(true)
                        setAllAPI();
                    }
                }, 2000)
                setTimeout(() => {
                    setPopupSuccess(false)
                }, 4000)
            }, (err) => {
                if (err) {
                    setLoadingUpdate(false)
                }
            })
        setSubmit(false)
        setBgColorBtn(false)
    }

    if (Object.keys(errors).length === 0 && submit) {
        updateAPIPassword()
    }

    useEffect(() => {
        setAllAPI()
    }, [])

    return (
        <>
            <div className="wrapp-ubah-password">
                <Headers
                    title={'Ubah Password'}
                    displayBack={'flex'}
                    clickBack={() => {
                        history.push('/setting')
                    }} />

                <div className="column-bawah-ubah-password">
                    <InputProfile
                        titleInput={'Password'}
                        txtInput={dataUser.password}
                        clickPencil={() => {
                            setDisplayPassword(true)
                            setDataUpdate({
                                password: dataUser.password,
                                confirmPassword: dataUser.confirmPassword
                            })
                        }}
                    />
                </div>

                <ModalUpdate
                    displayModal={displayPassword ? 'flex' : 'none'}
                    titleModalUpdate={'Ubah password kamu'}
                    nameInput={'password'}
                    nameInput2={'confirmPassword'}
                    placeholder={'New password'}
                    placeholder2={'Confirm new password'}
                    bgColorBtn={bgColorBtn ? '#fdc426' : '#eee'}
                    colorEye={eye ? '#fdc426' : '#eee'}
                    colorEye2={eye2 ? '#fdc426' : '#eee'}
                    type={eye ? 'text' : 'password'}
                    type2={eye2 ? 'text' : 'password'}
                    clickEye={() => setEye(!eye)}
                    clickEye2={() => setEye2(!eye2)}
                    changeInput={changePassword}
                    changeInput2={changePassword}
                    values={dataUpdate.password}
                    values2={dataUpdate.confirmPassword}
                    txtWarningPassword={errors && errors.password}
                    txtWarningPassword2={errors && errors.confirmPassword}
                    btnCancel={'Batal'}
                    clickCancel={() => setDisplayPassword(false)}
                    btnOkay={'Oke'}
                    submit={handleOke}
                />

                <Popup
                    displayPopup={loadingUpdate ? 'flex' : 'none'}
                    wrappPosition={'fixed'}
                    displayBtn={'none'}
                    txtLoading={'Loading...'} />

                <Popup
                    displayPopup={popupSuccess ? 'flex' : 'none'}
                    imgPopup={imgCeklis}
                    displayBtn={'none'}
                    displayLoading={'none'}
                    displayImg={'flex'}
                    txtLoading={'Berhasil update!'}
                    paddingBottomBoxWhite={'20px'}
                />

                {dataUser && dataUser.password ? (
                    null
                ) : (
                        <Popup
                            displayPopup={'flex'}
                            wrappPosition={'fixed'}
                            displayBtn={'none'}
                            txtLoading={'Loading...'} />
                    )}
            </div>
        </>
    )
}

export default UbahPassword