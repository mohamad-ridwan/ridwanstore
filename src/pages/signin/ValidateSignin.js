export default function ValidateSignin(values) {
    let errors = {}

    if (!values.username) {
        errors.username = 'Wajib di isi!'
    }

    if (!values.password) {
        errors.password = 'Wajib di isi!'
    }

    return errors;
}