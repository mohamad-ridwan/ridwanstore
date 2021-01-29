import { endpoint } from "../endpoint"

export const getDataUser = async (path) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(console.log('failed request data user :', err))
            })
    })

    return promise
}