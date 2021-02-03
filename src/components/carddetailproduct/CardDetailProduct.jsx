import React from 'react'
import Buttons from '../buttons/Buttons'
import img from '../../img/enambelas.jpg'
import './CardDetailProduct.scss'

export default function CardDetailProduct({ data, clickCart }) {

    const URLImg = `http://localhost:6235/${data.image}`

    return (
        <>
            <div className="container-detailP">
                <div className="box-cart-detailP">
                    <span class="material-icons check">
                        check_circle
                    </span>
                    <span class="material-icons cart" onClick={clickCart}>
                        shopping_cart
                    </span>
                </div>
                <img src={URLImg} alt="" className="img-detailP" />

                <div className="container-deskripsi">
                    <p className="price-detailP">
                        Rp{data.price}
                    </p>
                    <p className="name-detailP">
                        {data.name}
                    </p>
                    <p className="stock-detailP">
                        Stock ({data.stock})
                        </p>
                    <p className="deskripsi-detailP">
                        {data.deskripsi}
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