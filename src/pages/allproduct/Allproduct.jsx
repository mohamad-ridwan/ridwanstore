import React, { Component } from 'react'
import Headers from '../../components/headers/Headers'
import './Allproduct.scss'

class Allproduct extends Component {
    render() {
        return (
            <>
                <div className="wrapp-allproduct">
                    <Headers
                        heightHeader={'150px'}
                    />
                </div>
            </>
        )
    }
}

export default Allproduct