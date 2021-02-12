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
import PopupDelete from '../../components/popdelete/PopupDelete'
import imgCeklis from '../../img/ceklis.svg'

export default function Keranjang() {

    // const [data, setData, setAllAPI] = useContext(KeranjangContext)
    const [data2, setData2] = useState([])
    const [loading, setLoading] = useState([])
    const [loadingDelete, setLoadingDelete] = useState(false)
    const [popupSuccess, setPopupSuccess] = useState(false)
    const [displayPopDel, setDisplayPopDel] = useState(false)
    const [idData, setIdData] = useState({
        _id: '',
        name: ''
    })

    const history = useHistory()

    const setAllAPI = () => {
        const path = 'v8/makaroni/getall'
        API.APIGetAllProduct(`${path}?page=1`)
            .then((res) => {
                setLoading(res.data)
            })
    }

    const getDataCart = () => {
        const userId = JSON.parse(localStorage.getItem('userId'))
        const get = userId && userId._id
        API.APIGetKeranjang()
            .then(res => {
                const check = res.data.filter((e) => e.idUser == get)
                setData2(check)
            })
    }

    const toDetailCard = (e) => {
        history.push(`/detail-product/${e}`)
    }

    const handleDelete = () => {
        API.APIDeleteKeranjang(idData._id)
            .then(res => {
                setDisplayPopDel(false)
                setLoadingDelete(true)
                setTimeout(() => {
                    if (res) {
                        setPopupSuccess(true)
                        setLoadingDelete(false)
                        getDataCart()
                    }
                }, 2000)
                setTimeout(() => {
                    setPopupSuccess(false)
                }, 4000)
            }, (err) => {
                if (err) {
                    setDisplayPopDel(false)
                    setLoadingDelete(false)
                }
            })
    }

    useEffect(() => {
        setAllAPI();
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
                                    clickCard={() => toDetailCard(e.idProduct)}
                                    clickDelete={(i) => {
                                        setDisplayPopDel(true)
                                        setIdData({ _id: e._id, name: e.name })
                                        i.stopPropagation()
                                    }}
                                />
                            )
                        }) : (
                            <MessageInfo
                                message={'Oops, Keranjangmu Kosong!'}
                                imgMessage={img}
                            />
                        )}
                </div>

                <PopupDelete
                    displayPopDel={displayPopDel ? 'flex' : 'none'}
                    txtPopdel={`Delete ${idData.name} ?`}
                    cancelBtn={'Batal'}
                    deleteBtn={'Delete'}
                    colorBtn={'#fff'}
                    bgColorBtn={'#ff0000'}
                    clickCancel={() => setDisplayPopDel(false)}
                    clickDelete={handleDelete}
                />

                <Popup
                    displayPopup={popupSuccess ? 'flex' : 'none'}
                    imgPopup={imgCeklis}
                    displayBtn={'none'}
                    displayLoading={'none'}
                    displayImg={'flex'}
                    txtLoading={`Berhasil delete ${idData.name} !`}
                    paddingBottomBoxWhite={'20px'}
                />

                <Popup
                    displayPopup={loadingDelete ? 'flex' : 'none'}
                    wrappPosition={'fixed'}
                    displayBtn={'none'}
                    txtLoading={'Loading...'} />

                {loading && loading.length > 0 ? (
                    null
                ) : (
                        <Popup
                            displayPopup={'flex'}
                            wrappPosition={'fixed'}
                            displayBtn={'none'}
                            txtLoading={'Loading...'} />
                    )}

                <Navbottom
                    displayTotalKeranjang={data2 && data2.length >= 1 ? 'flex' : 'none'}
                    total={data2 && data2.length}
                />
            </div>
        </>
    )
}