import React from 'react'
import Buttons from '../buttons/Buttons'
import img from '../../img/enambelas.jpg'
import './CardDetailProduct.scss'

export default function CardDetailProduct() {
    return (
        <>
            <div className="container-detailP">
                <div className="box-cart-detailP">
                    <i className="fas fa-check-circle check"></i>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <img src={img} alt="" className="img-detailP" />

                <div className="container-deskripsi">
                    <p className="price-detailP">
                        Rp2.000
                        </p>
                    <p className="name-detailP">
                        Makaroni Original
                        </p>
                    <p className="stock-detailP">
                        Stock (20)
                        </p>
                    <p className="deskripsi-detailP">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>

                    <Buttons
                        displayLogoIcon={'none'}
                        heightBtn={'50px'}
                        textBtn={'Beli'}
                        marginBtn={'20px 0 20px 0'}
                        fontSizeBtn={'12pt'}
                        colorBtn={'#444'}
                    // click={() => {
                    //     history.push('/')
                    // }}
                    />
                </div>

            </div>
        </>
    )
}