import React from 'react'
import { useHistory } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import './Setting.scss'

export default function Setting() {

    const history = useHistory()

    return (
        <>
            <div className="wrapp-setting">
                <Headers
                    title={'Setting'}
                    displayBack={'flex'}
                    clickBack={() => {
                        history.push('/')
                    }} />

                <div className="container-setting">
                    <button className="btn-link-setting" onClick={() => history.push('/profile')}>
                        Profile

                        <span className="material-icons">
                            arrow_forward_ios
                        </span>
                    </button>
                    <button className="btn-link-setting">
                        Alamat

                        <span className="material-icons">
                            arrow_forward_ios
                        </span>
                    </button>
                    <button className="btn-link-setting" onClick={() => history.push('/ubah-password')}>
                        Ubah Password

                        <span className="material-icons">
                            arrow_forward_ios
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}