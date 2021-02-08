import React from 'react'
import './CardKeranjang.scss'

const CardKeranjang = ({ img, name, price, clickCard, clickDelete }) => {
    return (
        <>
            <div className="wrapp-card-keranjang" onClick={clickCard}>
                <img src={img} alt="" className="img-product" />
                <div className="column-kanan">
                    <p className="name-card-keranjang">
                        {name}
                    </p>
                    <p className="price-card-keranjang">
                        Rp{price}
                    </p>
                </div>

                <span class="material-icons delete" onClick={clickDelete}>
                    delete
                </span>
            </div>
        </>
    )
}

export default CardKeranjang