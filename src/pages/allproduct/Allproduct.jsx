import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Slider from 'react-slick'
import Card from '../../components/card/Card'
import Headers from '../../components/headers/Headers'
import MenuKategori from '../../components/menukategori/MenuKategori'
import imgCard from '../../img/enambelas.jpg'
import API from '../../service/globalapi'
import './Allproduct.scss'

class Allproduct extends Component {

    state = {
        data: [],
        pathName: {},
        search: '',
        data2: []
    }

    setting = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
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
                </div>
            </>
        )
    }
}

export default withRouter(Allproduct)