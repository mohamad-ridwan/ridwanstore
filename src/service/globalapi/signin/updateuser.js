import { endpoint } from "../endpoint"

const UpdateUser = async (path, data) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                phoneNumber: data.phoneNumber
            })
        })
            .then(res => res.json())
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(console.log(err))
            })
    })
    return promise
}

export default UpdateUser