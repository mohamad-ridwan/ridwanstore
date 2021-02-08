import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Slider from 'react-slick'
import Card from '../../components/card/Card'
import Headers from '../../components/headers/Headers'
import MenuKategori from '../../components/menukategori/MenuKategori'
import Popup from '../../components/popup/Popup'
import imgCard from '../../img/enambelas.jpg'
import API from '../../service/globalapi'
import './Allproduct.scss'

class Allproduct extends Component {

    state = {
        data: [],
        pathName: {},
        search: '',
        data2: [],
        loading: true
    }

    setting = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    }

    clickPage = (e) => {
        this.props.history.push(`/all-product/${e}`)
        const path = `v8/makaroni/getall?page=${e}`
        API.APIGetAllProduct(path)
            .then(res => {
                this.setState({ data: res.data, pathName: res.data[0] })
            })
    }

    setAllAPI = () => {
        const id = this.props.match.params.id
        const path = `v8/makaroni/getall?page=${id}`
        API.APIGetAllProduct(path)
            .then(res => {
                this.setState({ data: res.data, pathName: res.data[0] })
            })
    }

    toDetailProduct = (e) => {
        this.props.history.push(`/detail-product/${e}`)
    }

    componentDidMount() {
        this.setAllAPI();
    }

    render() {

        const data = this.state.data

        return (
            <>
                <div className="wrapp-allproduct">
                    <Headers
                        displayBack={'flex'}
                        clickBack={() => this.props.history.push('/')}
                        heightHeader={'150px'}
                        displayFormSearch={'flex'}
                        placeholderSearch={'Cari Makaroni...'}
                        valueSearch={this.state.search}
                        changeSearch={(e) => this.setState({ search: e.target.value })}
                    />

                    <div className="container-allproduct">
                        <div className="header-menu-kategori">
                            <Slider {...this.setting}>
                                <MenuKategori
                                    titleMenu={'Semua Harga'}
                                    toPage={'/all-product/1'}
                                    clickPage={() => this.clickPage('1')}
                                />
                                <MenuKategori
                                    titleMenu={'Serba Lima Ribu'}
                                    toPage={'/all-product/2'}
                                    clickPage={() => this.clickPage('2')}
                                />
                                <MenuKategori
                                    titleMenu={'Serba Sepuluh Ribu'}
                                    toPage={'/all-product/3'}
                                    clickPage={() => this.clickPage('3')}
                                />
                                <MenuKategori
                                    titleMenu={'Serba Lima Belas Ribu'}
                                    toPage={'/all-product/4'}
                                    clickPage={() => this.clickPage('4')}
                                />
                            </Slider>
                        </div>

                        <p className="total-makaroni">
                            {this.state.data.length} Makaroni ({this.state.pathName.pathName})
                            </p>
                        <div className="column-card-all-product">

                            {this.state.data.filter((e, i) => {
                                if (this.state.search == "") {
                                    return e
                                } else if (e.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                                    return e
                                }
                            }).map((e, i) => {
                                return (
                                    <Card
                                        key={i._id}
                                        imgCard={`http://localhost:6235/${e.image}`}
                                        widthCard={'calc(92%/3)'}
                                        marginCard={'10px 0'}
                                        price={e.price}
                                        name={e.name}
                                        stock={e.stock}
                                        clickCard={() => this.toDetailProduct(e._id)}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    {data && data.length > 0 ? (
                        null
                    ) : (
                            <Popup
                                displayPopup={this.state.loading ? 'flex' : 'none'}
                                wrappPosition={'fixed'}
                                displayBtn={'none'}
                                txtLoading={'Loading...'} />
                        )}
                </div>
            </>
        )
    }
}

export default withRouter(Allproduct)