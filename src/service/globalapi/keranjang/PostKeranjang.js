import { endpoint } from "../endpoint"

const PostKeranjang = async (path, data) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUser: data.idUser,
                idProduct: data.idProduct,
                name: data.name,
                price: data.price,
                image: data.image
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

export default PostKeranjang