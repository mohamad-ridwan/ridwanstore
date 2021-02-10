import React from 'react'
import Buttons from '../buttons/Buttons'
import FormInput from '../forminput/FormInput'
import './ModalUpdate.scss'

const ModalUpdate = ({ values, changeInput, submit, titleModalUpdate, placeholder, nameInput, btnCancel, btnOkay, displayModal, clickCancel }) => {
    return (
        <>
            <div className="modal-update-user" style={{
                display: `${displayModal}`
            }}>
                <div className="box-white-modal-update">
                    <p className="txt-modal-update">
                        {titleModalUpdate}
                    </p>

                    <form className="form-modal-update" onSubmit={submit}>
                        <FormInput
                            displayEye={'none'}
                            type={'text'}
                            placeholder={placeholder}
                            nameInput={nameInput}
                            value={values}
                            change={changeInput}
                        />
                    </form>

                    <div className="column-btn-submit-modal">
                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={btnCancel}
                            marginBtn={'0px 20px 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={'#444'}
                            bgColorBtn={'#eee'}
                            click={clickCancel}
                        />
                        <Buttons
                            displayLogoIcon={'none'}
                            heightBtn={'50px'}
                            textBtn={btnOkay}
                            marginBtn={'0px 0 0 0'}
                            fontSizeBtn={'12pt'}
                            colorBtn={'#444'}
                            click={submit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalUpdate