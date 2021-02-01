import React from 'react'

export default function ValidateInfo(values) {
    let errors = {}
    // const check = values.email.includes('@gmail.com')

    if (!values.username.trim()) {
        errors.username = 'Wajib di isi!'
    }

    if (!values.email) {
        errors.email = 'Wajib di isi!'
    } else if (!values.email.includes('@gmail.com')) {
        errors.email = `Harus berupa '@gmail.com' !`
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Wajib di isi!'
    }

    if (!values.password) {
        errors.password = 'Wajib di isi!'
    } else if (values.password.length < 4) {
        errors.password = 'Minimal 4 karakter!'
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Wajib di isi!'
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Tidak konfirmasi password!'
    }

    return errors;
}