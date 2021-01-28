import React from 'react'
import { useHistory } from 'react-router-dom'
import Slider from 'react-slick'
import Card from '../../components/card/Card'
import HeaderCard from '../../components/headercard/HeaderCard'
import Headers from '../../components/headers/Headers'
import imgProfil from '../../img/avatar.jpg'
import imgCard from '../../img/enambelas.jpg'
import './Home.scss'

export default function Home() {

    const setting = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    const history = useHistory()

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
                    clickProfile={() => history.push('/profile')}
                    imgProfil={imgProfil}
                />

                <div className="container-cart-home">
                    <HeaderCard
                        titleCard={'Semua Harga'}
                        lihatSemua={'Lihat Semua'}
                        toLihatSemua={toLihatSemua}
                    />
                    <Slider {...setting} className='boxSlide'>
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                            clickCard={toDetailProduct}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                            clickCard={toDetailProduct}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                    </Slider>
                </div>

                <div className="container-cart-home">
                    <HeaderCard
                        titleCard={'Serba Lima Ribu'}
                        lihatSemua={'Lihat Semua'}
                    />
                    <Slider {...setting} className='boxSlide'>
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                    </Slider>
                </div>
                <div className="container-cart-home">
                    <HeaderCard
                        titleCard={'Semua Sepuluh Ribu'}
                        lihatSemua={'Lihat Semua'}
                    />
                    <Slider {...setting} className='boxSlide'>
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                        <Card
                            imgCard={imgCard}
                            price={'3.500'}
                            name={'Makaroni Original'}
                            stock={'20'}
                        />
                    </Slider>
                </div>
            </div>
        </>
    )
}