import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Slider from 'react-slick'
import Card from '../../components/card/Card'
import HeaderCard from '../../components/headercard/HeaderCard'
import Headers from '../../components/headers/Headers'
import imgProfil from '../../img/avatar.jpg'
import imgCard from '../../img/enambelas.jpg'
import { GetUserSigninContext } from '../../service/context/getusersignin/GetUserSignin'
import API from '../../service/globalapi'
import './Home.scss'

export default function Home() {

    const [semuaHarga, setSemuaHarga] = useState([])
    const [limaRibu, setLimaRibu] = useState([])
    const [sepuluhRibu, setSepuluhRibu] = useState([])
    const [limaBelasRibu, setLimaBelasRibu] = useState([])

    const path = 'v8/makaroni/getall'
    const history = useHistory()

    const setAllAPI = () => {
        const getStorage = JSON.parse(localStorage.getItem('userData'))

        API.APIGetDataUser(getStorage ? getStorage._id : '')
            .catch(err => {
                history.push('/sign-in')
                return err;
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
        setAllAPI()
    }, [])

    const setting = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    const toDetailProduct = () => {
        history.push('/detail-product')
    }

    const toLihatSemua = () => {
        history.push('/all-product')
    }

    return (
        <>
            <div className="wrapp-home">
                <Headers
                    heightHeader={'150px'}
                    title={'Home'}
                    displayImgProfil={'flex'}
                    clickProfile={() => history.push('/setting')}
                    imgProfil={imgProfil}
                />

                <div className="container-cart-home">
                    <HeaderCard
                        titleCard={'Semua Harga'}
                        lihatSemua={'Lihat Semua'}
                        toLihatSemua={toLihatSemua}
                    />
                    <Slider {...setting} className='boxSlide'>
                        {semuaHarga && semuaHarga.length > 0 ? semuaHarga.map((e) => {
                            return (
                                <Card
                                    imgCard={`http://localhost:6235/${e.image}`}
                                    price={e.price}
                                    name={e.name}
                                    stock={e.stock}
                                    clickCard={toDetailProduct}
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
                    />
                    <Slider {...setting} className='boxSlide'>
                        {limaRibu && limaRibu.length > 0 ? limaRibu.map((e) => {
                            return (
                                <Card
                                    imgCard={`http://localhost:6235/${e.image}`}
                                    price={e.price}
                                    name={e.name}
                                    stock={e.stock}
                                    clickCard={toDetailProduct}
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
                    />
                    <Slider {...setting} className='boxSlide'>
                        {sepuluhRibu && sepuluhRibu.length > 0 ? sepuluhRibu.map((e) => {
                            return (
                                <Card
                                    imgCard={`http://localhost:6235/${e.image}`}
                                    price={e.price}
                                    name={e.name}
                                    stock={e.stock}
                                    clickCard={toDetailProduct}
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
                    />
                    <Slider {...setting} className='boxSlide'>
                        {limaBelasRibu && limaBelasRibu.length > 0 ? limaBelasRibu.map((e) => {
                            return (
                                <Card
                                    imgCard={`http://localhost:6235/${e.image}`}
                                    price={e.price}
                                    name={e.name}
                                    stock={e.stock}
                                    clickCard={toDetailProduct}
                                />
                            )
                        }) : (
                                <div>Loading...</div>
                            )}
                    </Slider>
                </div>
            </div>
        </>
    )
}