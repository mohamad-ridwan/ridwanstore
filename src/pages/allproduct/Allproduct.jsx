import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Slider from 'react-slick'
import Card from '../../components/card/Card'
import Headers from '../../components/headers/Headers'
import MenuKategori from '../../components/menukategori/MenuKategori'
import imgCard from '../../img/enambelas.jpg'
import './Allproduct.scss'

class Allproduct extends Component {

    setting = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    }

    render() {
        return (
            <>
                <div className="wrapp-allproduct">
                    <Headers
                        displayBack={'flex'}
                        clickBack={() => this.props.history.push('/')}
                        heightHeader={'150px'}
                        displayFormSearch={'flex'}
                        placeholderSearch={'Cari Makaroni...'}
                    />

                    <div className="container-allproduct">
                        <div className="header-menu-kategori">
                            <Slider {...this.setting}>
                                <MenuKategori
                                    titleMenu={'Semua Harga'}
                                />
                                <MenuKategori
                                    titleMenu={'Serba Lima Ribu'}
                                />
                                <MenuKategori
                                    titleMenu={'Serba Sepuluh Ribu'}
                                />
                                <MenuKategori
                                    titleMenu={'Serba Lima Belas Ribu'}
                                />
                            </Slider>
                        </div>

                        <p className="total-makaroni">
                            20 Makaroni (Semua Harga)
                        </p>
                        <div className="column-card-all-product">
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                            <Card
                                imgCard={imgCard}
                                widthCard={'calc(92%/3)'}
                                marginCard={'10px 0'}
                                price={'3.500'}
                                name={'Makaroni Original'}
                                stock={'20'}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Allproduct)