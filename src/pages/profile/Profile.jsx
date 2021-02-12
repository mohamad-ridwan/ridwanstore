import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import InputProfile from '../../components/inputprofile/InputProfile'
import ModalUpdate from '../../components/modalupdate/ModalUpdate'
import PopupDelete from '../../components/popdelete/PopupDelete'
import Popup from '../../components/popup/Popup'
import img from '../../img/avatar.jpg'
import API from '../../service/globalapi'
import imgCeklis from '../../img/ceklis.svg'
import './Profile.scss'

class Profile extends Component {

    state = {
        dataUser: {},
        loading: true,
        displayPopDel: false,
        loadingLogOut: false,
        displayUsername: false,
        displayEmail: false,
        displayPhoneNumber: false,
        popupSuccess: false,
        bgColorBtn: false,
        txtWarningEmail: '',
        imageUser: '',
        change: ''
    }

    setAllAPI = () => {
        const getStorage = JSON.parse(localStorage.getItem('userId'))
        API.APIGetDataUser(getStorage ? getStorage._id : '')
            .then((res) => {
                if (res) {
                    const newImgUrl = res.accountGoogle.imageUrl
                    this.setState({ dataUser: res, imageUser: newImgUrl })
                }
            })
            .catch(err => {
                this.props.history.push('/sign-in')
                return err;
            })
    }

    componentDidMount() {
        this.setAllAPI()
    }

    handleLogOut = () => {
        this.setState({ displayPopDel: true })
    }

    handleCancel = () => {
        this.setState({ displayPopDel: false })
    }

    handlePopDelLogOut = () => {
        this.setState({ displayPopDel: false })
        this.setState({ loadingLogOut: true })
        setTimeout(() => {
            const storage = localStorage.removeItem('userId')
            this.props.history.push('/sign-in')
            return storage
        }, 2000);
    }

    changeUsername = (e) => {
        const value = e.target.value
        this.setState({ change: value })
        const { username, email, phoneNumber } = { ...this.state.dataUser }
        if (!value) {
            this.setState({ bgColorBtn: false })
        } else if (value.length > 0) {
            this.setState({ bgColorBtn: true })
        }
        if (value == username || value == email || value == phoneNumber) {
            this.setState({ bgColorBtn: false })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, email, phoneNumber } = this.state.dataUser
        const result = this.state.change
        if (result.length > 0) {
            if (result !== username && this.state.displayUsername) {
                const data = {
                    username: result,
                    email: email,
                    phoneNumber: phoneNumber
                }
                this.updateProfileUser(data)
                this.setState({ bgColorBtn: false })
            }
            if (result !== email && this.state.displayEmail) {
                if (result.includes('@gmail.com')) {
                    const data = {
                        username: username,
                        email: result,
                        phoneNumber: phoneNumber
                    }
                    this.updateProfileUser(data)
                    this.setState({ bgColorBtn: false })
                } else {
                    this.setState({ txtWarningEmail: `Harus berupa '@gmail.com'` })
                }
            }
            if (result !== phoneNumber && this.state.displayPhoneNumber) {
                const data = {
                    username: username,
                    email: email,
                    phoneNumber: result
                }
                this.updateProfileUser(data)
                this.setState({ bgColorBtn: false })
            }
        }
    }

    updateProfileUser = (data) => {
        const idUser = JSON.parse(localStorage.getItem('userId'))
        API.APIUpdateUser(idUser._id, data)
            .then(res => {
                this.setState({ loadingLogOut: true })
                setTimeout(() => {
                    if (res) {
                        this.setState({
                            loadingLogOut: false,
                            popupSuccess: true
                        })
                        if (this.state.displayUsername) {
                            this.setState({ displayUsername: false })
                        }
                        if (this.state.displayEmail) {
                            this.setState({ displayEmail: false, txtWarningEmail: '' })
                        }
                        if (this.state.displayPhoneNumber) {
                            this.setState({ displayPhoneNumber: false })
                        }
                        this.setAllAPI();
                    }
                }, 2000)
                setTimeout(() => {
                    this.setState({ popupSuccess: false })
                }, 3000)
            }, (err) => {
                if (err) {
                    this.setState({
                        loadingLogOut: false,
                        displayUsername: false
                    })
                }
            })
        return data
    }

    render() {

        const data = this.state.dataUser
        const { imageUser } = this.state

        return (
            <>
                <div className="wrapp-profile">
                    <Headers
                        heightHeader={'150px'}
                        title={'Profile'}
                        displayBack={'flex'}
                        clickBack={() => {
                            this.props.history.push('/setting')
                        }} />

                    <div className="container-profile">
                        <img src={`${imageUser || img}`} alt="" className="img-profile-user" />
                        <p className="name-profile">
                            {this.state.dataUser.username}
                        </p>

                        <p className="edit-profile">
                            Edit Profile
                        </p>

                        <InputProfile
                            titleInput={'Nama'}
                            txtInput={this.state.dataUser.username}
                            clickPencil={() => {
                                this.setState({
                                    displayUsername: true,
                                    change: this.state.dataUser.username
                                })
                            }}
                        />
                        <InputProfile
                            titleInput={'Email'}
                            txtInput={this.state.dataUser.email}
                            clickPencil={() => {
                                this.setState({
                                    displayEmail: true,
                                    change: this.state.dataUser.email
                                })
                            }}
                        />
                        <InputProfile
                            titleInput={'Nomer Hp'}
                            txtInput={this.state.dataUser.phoneNumber}
                            clickPencil={() => {
                                this.setState({
                                    displayPhoneNumber: true,
                                    change: this.state.dataUser.phoneNumber
                                })
                            }}
                        />

                        <button className="btn-log-out" onClick={this.handleLogOut}>
                            Log out
                        </button>
                    </div>

                    <ModalUpdate
                        displayModal={this.state.displayUsername ? 'flex' : 'none'}
                        displayFormInput={'none'}
                        displayEye={'none'}
                        type={'text'}
                        titleModalUpdate={'Ubah Nama Kamu'}
                        placeholder={'Nama'}
                        nameInput={'username'}
                        bgColorBtn={this.state.bgColorBtn ? '#fdc426' : '#eee'}
                        values={this.state.change}
                        changeInput={this.changeUsername}
                        btnCancel={'Batal'}
                        clickCancel={() => this.setState({ displayUsername: false })}
                        btnOkay={'Oke'}
                        submit={this.handleSubmit}
                    />

                    <ModalUpdate
                        displayModal={this.state.displayEmail ? 'flex' : 'none'}
                        displayFormInput={'none'}
                        displayEye={'none'}
                        type={'email'}
                        bgColorBtn={this.state.bgColorBtn ? '#fdc426' : '#eee'}
                        txtWarningPassword={this.state.txtWarningEmail}
                        titleModalUpdate={'Ubah Email Kamu'}
                        placeholder={'Email'}
                        nameInput={'email'}
                        values={this.state.change}
                        changeInput={this.changeUsername}
                        btnCancel={'Batal'}
                        clickCancel={() => this.setState({ displayEmail: false })}
                        btnOkay={'Oke'}
                        submit={this.handleSubmit}
                    />

                    <ModalUpdate
                        displayModal={this.state.displayPhoneNumber ? 'flex' : 'none'}
                        bgColorBtn={this.state.bgColorBtn ? '#fdc426' : '#eee'}
                        displayFormInput={'none'}
                        displayEye={'none'}
                        type={'telp'}
                        titleModalUpdate={'Ubah Nomer Hp Kamu'}
                        placeholder={'Nomer Hp'}
                        nameInput={'phoneNumber'}
                        values={this.state.change}
                        changeInput={this.changeUsername}
                        btnCancel={'Batal'}
                        clickCancel={() => this.setState({ displayPhoneNumber: false })}
                        btnOkay={'Oke'}
                        submit={this.handleSubmit}
                    />

                    <PopupDelete
                        displayPopDel={this.state.displayPopDel ? 'flex' : 'none'}
                        txtPopdel={'Anda yakin ingin keluar?'}
                        cancelBtn={'Batal'}
                        deleteBtn={'Keluar'}
                        colorBtn={'#fff'}
                        bgColorBtn={'#ff0000'}
                        clickCancel={this.handleCancel}
                        clickDelete={this.handlePopDelLogOut}
                    />

                    <Popup
                        displayPopup={this.state.loadingLogOut ? 'flex' : 'none'}
                        wrappPosition={'fixed'}
                        displayBtn={'none'}
                        txtLoading={'Loading...'} />

                    <Popup
                        displayPopup={this.state.popupSuccess ? 'flex' : 'none'}
                        imgPopup={imgCeklis}
                        displayBtn={'none'}
                        displayLoading={'none'}
                        displayImg={'flex'}
                        txtLoading={'Berhasil update!'}
                        paddingBottomBoxWhite={'20px'}
                    />

                    {data && Object.keys(data).length > 0 ? (
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
}

export default withRouter(Profile)