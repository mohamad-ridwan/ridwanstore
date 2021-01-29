import { endpoint } from "../endpoint"

export const getUserSignin = async (path, username, password) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res => res.json())
            .then((res) => {
                resolve(res)
            }, (err) => {
                reject(console.log('error sign in :', err))
            })
    })

    return promise
}