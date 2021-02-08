import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import CardDetailProduct from '../../components/carddetailproduct/CardDetailProduct'
import Headers from '../../components/headers/Headers'
import Navbottom from '../../components/navbottom/Navbottom'
import Popup from '../../components/popup/Popup'
import img from '../../img/enambelas.jpg'
import { KeranjangContext } from '../../service/context/keranjang/Keranjang'
import API from '../../service/globalapi'
import './DetailProduct.scss'

class DetailProduct extends Component {

    static contextType = KeranjangContext

    state = {
        data: {},
        check: false,
        data2: [],
        loading: true
    }

    setAllAPI = () => {
        const path = 'v8/makaroni/getall'
        const id = this.props.match.params.id
        API.APIGetAllProduct(`${path}/${id}`)
            .then(res => {
                const dataCart = this.state.data2
                const check = dataCart && dataCart.every((e, i) => {
                    return e.idProduct != res.data._id
                })
                if (!check) {
                    this.setState({ check: true })
                }
                this.setState({ data: res.data })
            })
    }

    postKeranjang = () => {
        const { _id, name, price, image } = { ...this.state.data }
        const userId = JSON.parse(localStorage.getItem('userId'))
        const dataCart = this.state.data2
        const data = {
            idUser: userId && userId._id,
            idProduct: _id,
            name: name,
            price: price,
            image: image
        }
        const confirm = window.confirm('Tambah ke keranjang?')
        const check = dataCart.every((e, i) => {
            return e.idProduct !== _id
        })
        if (confirm) {
            if (check) {
                API.APIPostKeranjang(data)
                alert('berhasil di tambahkan ke keranjang')
                this.setState({ check: true })
            } else {
                alert('sudah ada')
            }

        }
    }

    getDataCart = () => {
        const userId = JSON.parse(localStorage.getItem('userId'))
        const get = userId && userId._id
        API.APIGetKeranjang()
            .then(res => {
                const check = res.data.filter((e) => e.idUser == get)
                this.setState({ data2: check })
            })
    }

    componentDidMount() {
        this.getDataCart();
        this.setAllAPI();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            this.getDataCart();
            this.setAllAPI();
        }
    }

    render() {

        // const data = this.context[0]
        const data = this.state.data

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
                        displayCheck={this.state.check ? 'flex' : 'none'}
                        data={this.state.data && this.state.data}
                        clickCart={this.postKeranjang}
                    />

                    {data && Object.keys(data).length > 0 ? (
                        null
                    ) : (
                            <Popup
                                displayPopup={this.state.loading ? 'flex' : 'none'}
                                wrappPosition={'fixed'}
                                displayBtn={'none'}
                                txtLoading={'Loading...'} />
                        )}

                    <Navbottom
                        displayTotalKeranjang={this.state.data2 && this.state.data2.length >= 1 ? 'flex' : 'none'}
                        total={this.state.data2 && this.state.data2.length}
                    />
                </div>
            </>
        )
    }
}

export default withRouter(DetailProduct)