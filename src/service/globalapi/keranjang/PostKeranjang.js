import { endpoint } from "../endpoint"

const PostKeranjang = async (path, data) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data })
        })
            .then(res => res.json())
            .then(res => {
                resolve(console.log(res))
            })
            .catch(err => {
                reject(console.log(err))
            })
    })

    return promise
}

export default PostKeranjang