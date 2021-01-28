import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import CardDetailProduct from '../../components/carddetailproduct/CardDetailProduct'
import Headers from '../../components/headers/Headers'
import img from '../../img/enambelas.jpg'
import './DetailProduct.scss'

class DetailProduct extends Component {
    render() {
        return (
            <>
                <div className="wrapp-detail-product">
                    <Headers
                        displayBack={'flex'}
                        clickBack={() => this.props.history.push('/')}
                        heightHeader={'150px'}
                        title={'Detail Product'}
                    />

                    <CardDetailProduct />
                </div>
            </>
        )
    }
}

export default withRouter(DetailProduct)