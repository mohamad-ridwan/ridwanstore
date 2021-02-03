import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import CardDetailProduct from '../../components/carddetailproduct/CardDetailProduct'
import Headers from '../../components/headers/Headers'
import Navbottom from '../../components/navbottom/Navbottom'
import img from '../../img/enambelas.jpg'
import API from '../../service/globalapi'
import './DetailProduct.scss'

class DetailProduct extends Component {

    state = {
        data: {}
    }

    setAllAPI = () => {
        const path = 'v8/makaroni/getall'
        const id = this.props.match.params.id
        API.APIGetAllProduct(`${path}/${id}`)
            .then(res => {
                this.setState({ data: res.data })
            })
    }

    postKeranjang = () => {
        const { _id, name, price, image } = { ...this.state.data }
        const userId = JSON.parse(localStorage.getItem('userId'))
        const data = {
            idUser: userId && userId._id,
            idProduct: _id,
            name: name,
            price: price,
            image: image
        }
        console.log(image)
        console.log(data)
        const confirm = window.confirm('Tambah ke keranjang?')
        if (confirm) {
            API.APIPostKeranjang(data)
        }
    }

    componentDidMount() {
        this.setAllAPI();
    }

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

                    <CardDetailProduct
                        data={this.state.data && this.state.data}
                        clickCart={this.postKeranjang}
                    />

                    <Navbottom />
                </div>
            </>
        )
    }
}

export default withRouter(DetailProduct)