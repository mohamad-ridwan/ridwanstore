import React, { useEffect, useState } from 'react'
import API from '../globalapi';
import ActionType from './GlobalActionType';

const GlobalReducer = () => {
    const globalState = {
        dataKeranjang: []
    }

    const reducer = (state = globalState, action) => {
        // Defined case action
        switch (action.type) {
            case ActionType.GET_KERANJANG:
                return getDataKeranjang(state)
            default:
                return state
        }
    }

    const getDataKeranjang = (state) => {
        const getStorage = JSON.parse(localStorage.getItem('userId'))
        const get = getStorage && getStorage._id
        if (get) {
            API.APIGetKeranjang()
                .then(res => {
                    const result = res.data.filter((e) => e.idUser == get)
                    if (result) {
                        return {
                            ...state,
                            dataKeranjang: state.dataKeranjang = result
                        }

                    }
                })
        }
        return state
    }

    return { reducer }
}

export default GlobalReducer