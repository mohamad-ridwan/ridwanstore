import React from 'react'
import Buttons from '../buttons/Buttons'
import './PopupDelete.scss'

const PopupDelete = ({ txtPopdel, cancelBtn, deleteBtn, clickCancel, clickDelete, displayPopDel, bgColorBtn, colorBtn }) => {
    return (
        <>
            <div className="wrapp-popup-delete" style={{
                display: `${displayPopDel}`
            }}>
                <div className="box-white-popDel">
                    <p className="txt-popDel">
                        {txtPopdel}
                    </p>
                    <div className="column-btn-popDel">
                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={cancelBtn}
                            marginBtn={'0px 20px 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={'#444'}
                            bgColorBtn={'#eee'}
                            click={clickCancel}
                        />
                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={deleteBtn}
                            marginBtn={'0px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={colorBtn}
                            bgColorBtn={bgColorBtn}
                            click={clickDelete}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupDelete