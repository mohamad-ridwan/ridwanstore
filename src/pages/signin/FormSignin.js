import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../../service/globalapi'

const FormSignin = (validate) => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    const [errorSignin, setErrorSignin] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.stopPropagation()
        e.preventDefault()
        setErrors(validate(values))
        const { username, password } = { ...values }
        const check = Object.keys(username).length >= 1 && Object.keys(password).length >= 1
        if (check) {
            API.APIGetUserSignin(values)
                .then(res => {
                    setLoading(true)
                    const respons = res.data
                    setTimeout(() => {
                        if (respons) {
                            localStorage.setItem('userId', JSON.stringify({ _id: respons._id }))
                            setLoading(false)
                            history.push('/')
                        } else if (!respons) {
                            setLoading(false)
                            setErrorSignin('Username atau password salah!')
                        }
                    }, 1000)
                })
        }
    }

    return { handleChange, values, handleSubmit, errors, errorSignin, loading }
}

export default FormSignin