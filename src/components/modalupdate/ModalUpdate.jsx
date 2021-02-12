import React from 'react'
import Buttons from '../buttons/Buttons'
import FormInput from '../forminput/FormInput'
import './ModalUpdate.scss'

const ModalUpdate = ({ values, changeInput, submit, titleModalUpdate, placeholder, nameInput, btnCancel, btnOkay, displayModal, clickCancel, displayFormInput, type, type2, placeholder2, nameInput2, values2, changeInput2, displayEye, clickEye, clickEye2, colorEye, colorEye2, txtWarningPassword, txtWarningPassword2, bgColorBtn }) => {
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
                            displayEye={displayEye}
                            type={type}
                            placeholder={placeholder}
                            nameInput={nameInput}
                            value={values}
                            change={changeInput}
                            clickEye={clickEye}
                            colorEye={colorEye}
                            txtWarningPassword={txtWarningPassword}
                            displayWarningPassword={'flex'}
                        />
                        <FormInput
                            displayFormInput={displayFormInput}
                            displayEye={'flex'}
                            type={type2}
                            placeholder={placeholder2}
                            nameInput={nameInput2}
                            value={values2}
                            change={changeInput2}
                            clickEye={clickEye2}
                            colorEye={colorEye2}
                            txtWarningPassword={txtWarningPassword2}
                            displayWarningPassword={'flex'}
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
                            bgColorBtn={bgColorBtn}
                            click={submit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalUpdate