import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Slider from 'react-slick'
import Card from '../../components/card/Card'
import HeaderCard from '../../components/headercard/HeaderCard'
import Headers from '../../components/headers/Headers'
import CardNav from '../../components/navbottom/CardNav'
import Navbottom from '../../components/navbottom/Navbottom'
import Popup from '../../components/popup/Popup'
import imgProfil from '../../img/avatar.jpg'
import { KeranjangContext } from '../../service/context/keranjang/Keranjang'
import API from '../../service/globalapi'
import { connect } from 'react-redux'
import './Home.scss'
import ActionType from '../../service/redux/GlobalActionType'

const Home = ({ dataKeranjang, getKeranjang }) => {

    const [data2, setData2] = useState([])
    const [semuaHarga, setSemuaHarga] = useState([])
    const [limaRibu, setLimaRibu] = useState([])
    const [sepuluhRibu, setSepuluhRibu] = useState([])
    const [limaBelasRibu, setLimaBelasRibu] = useState([])
    const [loading, setLoading] = useState(true)
    const [imageUser, setImageUser] = useState({
        imageUrl: ''
    })

    const path = 'v8/makaroni/getall'
    const history = useHistory()

    const settingAllAPI = () => {
        const getStorage = JSON.parse(localStorage.getItem('userId'))
        const get = getStorage && getStorage._id
        API.APIGetDataUser(getStorage ? getStorage._id : '')
            .then(res => {
                const newImageUser = res.accountGoogle.imageUrl
                const checkImageUrl = res.accountGoogle.imageUrl.includes('https')
                if (checkImageUrl) {
                    setImageUser({ imageUrl: newImageUser })
                }
            })
            .catch((err) => {
                history.push('/sign-in')
                return err;
            })
        API.APIGetKeranjang()
            .then(res => {
                const check = res.data.filter((e) => e.idUser == get)
                setData2(check)
            })
        API.APIGetAllProduct(`${path}?page=1`)
            .then((res) => {
                setSemuaHarga(res.data)
            })
        API.APIGetAllProduct(`${path}?page=2`)
            .then((res) => {
                setLimaRibu(res.data)
            })
        API.APIGetAllProduct(`${path}?page=3`)
            .then((res) => {
                setSepuluhRibu(res.data)
            })
        API.APIGetAllProduct(`${path}?page=4`)
            .then((res) => {
                setLimaBelasRibu(res.data)
            })
    }

    useEffect(() => {
        settingAllAPI();
    }, []);

    const setting = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    const toDetailProduct = (e) => {
        history.push(`/detail-product/${e}`)
    }

    const toLihatSemua = (e) => {
        history.push(`/all-product/${e}`)
    }

    return (
        <>
            <div className="wrapp-home">
                <Headers
                    heightHeader={'150px'}
                    title={'Home'}
                    displayImgProfil={'flex'}
                    imgProfil={`${imageUser && imageUser.imageUrl || imgProfil}`}
                />

                <div className="container-cart-home">
                    <HeaderCard
                        titleCard={'Semua Harga'}
                        lihatSemua={'Lihat Semua'}
                        toLihatSemua={() => toLihatSemua('1')}
                    />
                    <Slider {...setting} className='boxSlide'>
                        {semuaHarga && semuaHarga.length > 0 ? semuaHarga.map((e, i) => {
                            return (
                                <Card
                                    key={i._id}
                                    imgCard={`http://localhost:6235/${e.image}`}
                                    price={e.price}
                                    name={e.name}
                                    stock={e.stock}
                                    clickCard={() => toDetailProduct(e._id)}
                                />
                            )
                        }) : (
                                <div>Loading...</div>
                            )}
                    </Slider>
                </div>

                <div className="container-cart-home">
                    <HeaderCard
                        titleCard={'Serba Lima Ribu'}
                        lihatSemua={'Lihat Semua'}
                        toLihatSemua={() => toLihatSemua('2')}
                    />
                    <Slider {...setting} className='boxSlide'>
                        {limaRibu && limaRibu.length > 0 ? limaRibu.map((e, i) => {
                            return (
                                <Card
                                    key={i._id}
                                    imgCard={`http://localhost:6235/${e.image}`}
                                    price={e.price}
                                    name={e.name}
                                    stock={e.stock}
                                    clickCard={() => toDetailProduct(e._id)}
                                />
                            )
                        }) : (
                                <div>Loading...</div>
                            )}
                    </Slider>
                </div>
                <div className="container-cart-home">
                    <HeaderCard
                        titleCard={'Serba Sepuluh Ribu'}
                        lihatSemua={'Lihat Semua'}
                        toLihatSemua={() => toLihatSemua('3')}
                    />
                    <Slider {...setting} className='boxSlide'>
                        {sepuluhRibu && sepuluhRibu.length > 0 ? sepuluhRibu.map((e, i) => {
                            return (
                                <Card
                                    key={i._id}
                                    imgCard={`http://localhost:6235/${e.image}`}
                                    price={e.price}
                                    name={e.name}
                                    stock={e.stock}
                                    clickCard={() => toDetailProduct(e._id)}
                                />
                            )
                        }) : (
                                <div>Loading...</div>
                            )}
                    </Slider>
                </div>
                <div className="container-cart-home">
                    <HeaderCard
                        titleCard={'Serba Lima Belas Ribu'}
                        lihatSemua={'Lihat Semua'}
                        toLihatSemua={() => toLihatSemua('4')}
                    />
                    <Slider {...setting} className='boxSlide'>
                        {limaBelasRibu && limaBelasRibu.length > 0 ? limaBelasRibu.map((e, i) => {
                            return (
                                <Card
                                    key={i._id}
                                    imgCard={`http://localhost:6235/${e.image}`}
                                    price={e.price}
                                    name={e.name}
                                    stock={e.stock}
                                    clickCard={() => toDetailProduct(e._id)}
                                />
                            )
                        }) : (
                                <div>Loading...</div>
                            )}
                    </Slider>
                </div>

                {semuaHarga && semuaHarga.length > 0 ? (
                    null
                ) : (
                        <Popup
                            displayPopup={loading ? 'flex' : 'none'}
                            wrappPosition={'fixed'}
                            displayBtn={'none'}
                            txtLoading={'Loading...'} />
                    )}

                <Navbottom
                    displayTotalKeranjang={data2 && data2.length >= 1 ? 'flex' : 'none'}
                    total={data2.length}
                />
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    dataKeranjang: state.dataKeranjang
})

const mapDispatchToProps = dispatch => ({
    getKeranjang: () => dispatch({ type: ActionType.GET_KERANJANG })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)