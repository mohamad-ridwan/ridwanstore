import React from 'react'
import { useHistory } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import MessageInfo from '../../components/messageinfo/MessageInfo'
import Navbottom from '../../components/navbottom/Navbottom'
import img from '../../img/trolley.svg'
import './Keranjang.scss'

export default function Keranjang() {

    const history = useHistory()

    return (
        <>
            <div className="wrapp-keranjang">
                <Headers
                    title={'Keranjang'}
                    displayBack={'flex'}
                    clickBack={() => {
                        history.push('/')
                    }} />

                <MessageInfo
                    message={'Oops, Keranjangmu Kosong!'}
                    imgMessage={img}
                />

                <Navbottom />
            </div>
        </>
    )
}