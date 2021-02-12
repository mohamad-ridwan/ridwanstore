import { endpoint } from "../endpoint"

const PostSignup = async (path, data) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(`${endpoint}/${path}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idUser: data.idUser,
                username: data.username,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password: data.password,
                confirmPassword: data.confirmPassword,
                googleId: data.googleId,
                givenName: data.givenName,
                familyName: data.familyName,
                name: data.name,
                emailGoogle: data.emailGoogle,
                imageUrl: data.imageUrl
            })
        })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(console.log(err)))
    })

    return promise
}

export default PostSignup