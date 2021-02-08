import React from 'react'

const BuildCaptcha = () => {

    let captcha = new Array()

    for (let q = 0; q < 6; q++) {
        if (q % 2 == 0) {
            captcha[q] = String.fromCharCode(Math.floor(Math.random() * 26 + 65))
        } else {
            captcha[q] = Math.floor(Math.random() * 10 + 0);
        }
    }

    const theCaptcha = captcha.join('')

    return { theCaptcha }
}

export default BuildCaptcha