const SendSms = async (path) => {
    const promise = await new Promise((resolve, reject) => {
        fetch(path, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                resolve(res)
                console.log(res)
            })
            .catch(err => {
                reject(console.log('failed send SMS : ', err))
            })
    })
    return promise
}

export default SendSms