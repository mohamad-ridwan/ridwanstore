import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import InputProfile from '../../components/inputprofile/InputProfile'
import img from '../../img/avatar.jpg'
import './Profile.scss'

class Profile extends Component {
    render() {
        return (
            <>
                <div className="wrapp-profile">
                    <Headers
                        heightHeader={'150px'}
                        title={'Profile'}
                        displayBack={'flex'}
                        clickBack={() => {
                            this.props.history.push('/')
                        }} />

                    <div className="container-profile">
                        <img src={img} alt="" className="img-profile-user" />
                        <p className="name-profile">
                            Mohamad Ridwan Apriyadi
                        </p>

                        <p className="edit-profile">
                            Edit Profile
                        </p>

                        <InputProfile
                            titleInput={'Nama'}
                            value={'Mohamad Ridwan Apriyadi'}
                            type={'text'}
                        />
                        <InputProfile
                            titleInput={'Email'}
                            value={'mr643062@gmail.com'}
                            type={'email'}
                        />
                        <InputProfile
                            titleInput={'Nomer Hp'}
                            value={'081383959452'}
                            type={'telp'}
                        />

                        <button className="btn-log-out">
                            Log out
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Profile)