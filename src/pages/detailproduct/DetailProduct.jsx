import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Buttons from '../../components/buttons/Buttons'
import CardDetailProduct from '../../components/carddetailproduct/CardDetailProduct'
import Headers from '../../components/headers/Headers'
import Navbottom from '../../components/navbottom/Navbottom'
import PopupDelete from '../../components/popdelete/PopupDelete'
import Popup from '../../components/popup/Popup'
import img from '../../img/enambelas.jpg'
import { KeranjangContext } from '../../service/context/keranjang/Keranjang'
import API from '../../service/globalapi'
import imgCeklis from '../../img/ceklis.svg'
import './DetailProduct.scss'

class DetailProduct extends Component {

    static contextType = KeranjangContext

    state = {
        data: {},
        check: false,
        data2: [],
        loading: false,
        displayPopDel: false,
        popupSuccess: false,
        alreadyCart: false
    }

    // GET PRODUCT
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

    // GET DATA KERANJANG
    getDataCart = () => {
        const userId = JSON.parse(localStorage.getItem('userId'))
        const get = userId && userId._id
        API.APIGetKeranjang()
            .then(res => {
                const check = res.data.filter((e) => e.idUser == get)
                this.setState({ data2: check })
            })
    }

    // POST TO CART
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
        const checkDataCart = this.state.check
        const check = dataCart.every((e, i) => {
            return e.idProduct !== _id
        })
        if (!checkDataCart) {
            if (check) {
                API.APIPostKeranjang(data)
                    .then(res => {
                        this.setState({
                            loading: true,
                            displayPopDel: false
                        })
                        setTimeout(() => {
                            if (res) {
                                this.setState({
                                    loading: false,
                                    check: true,
                                    popupSuccess: true
                                })
                            }
                        }, 2000)
                        setTimeout(() => {
                            this.setState({ popupSuccess: false })
                        }, 4000)
                    }, (err) => {
                        if (err) {
                            this.setState({ loading: false })
                        }
                    })
            }
        }
    }

    clickCart = () => {
        if (!this.state.check) {
            this.setState({ displayPopDel: true })
        } else {
            this.setState({ alreadyCart: true })
            setTimeout(() => {
                this.setState({ alreadyCart: false })
            }, 2000)
        }
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
                        clickCart={this.clickCart}
                    />

                    <PopupDelete
                        displayPopDel={this.state.displayPopDel ? 'flex' : 'none'}
                        txtPopdel={`Tambahkan ${this.state.data.name} ke keranjang?`}
                        cancelBtn={'Batal'}
                        deleteBtn={'Oke'}
                        clickCancel={() => this.setState({ displayPopDel: false })}
                        clickDelete={this.postKeranjang}
                    />

                    <Popup
                        displayPopup={this.state.popupSuccess ? 'flex' : 'none'}
                        imgPopup={imgCeklis}
                        displayBtn={'none'}
                        displayLoading={'none'}
                        displayImg={'flex'}
                        txtLoading={`${this.state.data.name} berhasil di tambahkan!`}
                        paddingBottomBoxWhite={'20px'}
                    />

                    <Popup
                        displayPopup={this.state.alreadyCart ? 'flex' : 'none'}
                        imgPopup={imgCeklis}
                        displayBtn={'none'}
                        displayLoading={'none'}
                        displayImg={'flex'}
                        txtLoading={`${this.state.data.name} sudah ada di keranjang!`}
                        paddingBottomBoxWhite={'20px'}
                    />

                    <Popup
                        displayPopup={this.state.loading ? 'flex' : 'none'}
                        wrappPosition={'fixed'}
                        displayBtn={'none'}
                        txtLoading={'Loading...'} />

                    {data && Object.keys(data).length > 0 ? (
                        null
                    ) : (
                            <Popup
                                displayPopup={'flex'}
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