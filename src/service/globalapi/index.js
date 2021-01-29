import { getAllProduct } from "./allproduct/get/get";
import { getDataUser } from "./getuser/getuser";
import { getUserSignin } from "./signin/get";

const getStorage = JSON.parse(localStorage.getItem('userData'))

const APIGetAllProduct = (path) => getAllProduct(path)
const APIGetUserSignin = (username, password) => getUserSignin('v13/signup/login', username, password)
const APIGetDataUser = (path) => getDataUser(`v13/signup/getsignup/${path}`)

const API = {
    APIGetAllProduct,
    APIGetUserSignin,
    APIGetDataUser
}

export default API