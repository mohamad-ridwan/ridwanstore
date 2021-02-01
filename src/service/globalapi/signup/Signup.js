import { endpoint } from "../endpoint"

const Signup = async (path, data) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data,
                confirmPassword: data.confirmPassword
            })
        })
            .then(res => res.json())
            .then(res => {
                resolve(console.log(res))
            })
            .catch(err => {
                reject(console.log('failed sign up : ', err))
            })
    })
    return promise
}

export default Signup