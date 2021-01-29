import { endpoint } from "../../endpoint"

export const getAllProduct = async (path) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then((res) => {
                resolve(res)
            }, (err) => {
                reject(console.log(err))
            })
    })
    return promise
}