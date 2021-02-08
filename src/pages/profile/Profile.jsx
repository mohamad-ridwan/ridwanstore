import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import InputProfile from '../../components/inputprofile/InputProfile'
import Popup from '../../components/popup/Popup'
import img from '../../img/avatar.jpg'
import API from '../../service/globalapi'
import './Profile.scss'

class Profile extends Component {

    state = {
        dataUser: {},
        loading: true
    }

    setAllAPI = () => {
        const getStorage = JSON.parse(localStorage.getItem('userId'))
        API.APIGetDataUser(getStorage ? getStorage._id : '')
            .then((res) => {
                if (res) {
                    this.setState({ dataUser: res })
                }
            })
            .catch(err => {
                this.props.history.push('/sign-in')
                return err;
            })
    }

    handleLogOut = () => {
        const storage = localStorage.removeItem('userId')
        this.props.history.push('/sign-in')
        return storage
    }

    componentDidMount() {
        this.setAllAPI()
    }

    render() {

        const data = this.state.dataUser

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
                        <img src={img} alt="" className="img-profile-user" />
                        <p className="name-profile">
                            {this.state.dataUser.username}
                        </p>

                        <p className="edit-profile">
                            Edit Profile
                        </p>

                        <InputProfile
                            titleInput={'Nama'}
                            value={this.state.dataUser.username}
                            type={'text'}
                        />
                        <InputProfile
                            titleInput={'Email'}
                            value={this.state.dataUser.email}
                            type={'email'}
                        />
                        <InputProfile
                            titleInput={'Nomer Hp'}
                            value={this.state.dataUser.phoneNumber}
                            type={'telp'}
                        />

                        <button className="btn-log-out" onClick={this.handleLogOut}>
                            Log out
                        </button>
                    </div>

                    {data && Object.keys(data).length > 0 ? (
                        null
                    ) : (
                            <Popup
                                displayPopup={this.state.loading ? 'flex' : 'none'}
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