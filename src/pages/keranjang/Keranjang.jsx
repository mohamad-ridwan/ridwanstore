import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Headers from '../../components/headers/Headers'
import MessageInfo from '../../components/messageinfo/MessageInfo'
import Navbottom from '../../components/navbottom/Navbottom'
import img from '../../img/trolley.svg'
import img1 from '../../img/enambelas.jpg'
import './Keranjang.scss'
import CardKeranjang from '../../components/cardkeranjang/CardKeranjang'
import { KeranjangContext } from '../../service/context/keranjang/Keranjang'
import API from '../../service/globalapi'
import Popup from '../../components/popup/Popup'

export default function Keranjang() {

    const [data, setData, setAllAPI] = useContext(KeranjangContext)
    const [data2, setData2] = useState([])
    const [loading, setLoading] = useState(true)

    const history = useHistory()
    const userId = JSON.parse(localStorage.getItem('userId'))
    const get = userId && userId._id

    const Component = ({
        handleParentClick: function (e) {
            history.push(`/detail-product/${e}`)
        },

        handleChildClick: function (e) {
            const confirm = window.confirm('Delete Makaroni?')
            if (confirm) {
                API.APIDeleteKeranjang(e)
                    .then(res => {
                        if (res) {
                            getDataCart()
                            alert('berhasil delete')
                        }
                    })
            }
            e.stopPropagation()
        }
    })

    const getDataCart = () => {
        API.APIGetKeranjang()
            .then(res => {
                const check = res.data.filter((e) => e.idUser == get)
                setData2(check)
            })
    }

    useEffect(() => {
        getDataCart();
    }, [])

    return (
        <>
            <div className="wrapp-keranjang">
                <Headers
                    title={'Keranjang'}
                    displayBack={'flex'}
                    clickBack={() => {
                        history.push('/')
                    }} />

                <div className="container-card-keranjang">
                    <p className="total-keranjang">
                        {data2 && data2.length >= 1 ? `Total ${data2.length} Makaroni` : ''}
                    </p>

                    {data2 && data2.length >= 1 ?
                        data2.map((e, i) => {
                            return (
                                <CardKeranjang
                                    key={i._id}
                                    img={`http://localhost:6235/${e.image}`}
                                    name={e.name}
                                    price={e.price}
                                    clickCard={() => Component.handleParentClick(e.idProduct)}
                                    clickDelete={() => Component.handleChildClick(e._id)}
                                />
                            )
                        }) : (
                            <MessageInfo
                                message={'Oops, Keranjangmu Kosong!'}
                                imgMessage={img}
                            />
                        )}

                </div>

                <Navbottom
                    displayTotalKeranjang={data2 && data2.length >= 1 ? 'flex' : 'none'}
                    total={data2 && data2.length}
                />
            </div>
        </>
    )
}