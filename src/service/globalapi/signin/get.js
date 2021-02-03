import { endpoint } from "../endpoint"

export const getUserSignin = async (path, data) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })
            .then(res => res.json())
            .then((res) => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })

    return promise
}