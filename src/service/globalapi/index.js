import Signup from "../../pages/signup/Signup";
import { getAllProduct } from "./allproduct/get/get";
import { getDataUser } from "./getuser/getuser";
import SendSms from "./sendsms/SendSms";
import { getUserSignin } from "./signin/get";

const getStorage = JSON.parse(localStorage.getItem('userData'))

const APIGetAllProduct = (path) => getAllProduct(path)
const APIGetUserSignin = (username, password) => getUserSignin('v13/signup/login', username, password)
const APIGetDataUser = (path) => getDataUser(`v13/signup/getsignup/${path}`)
const APISendSms = (path) => SendSms(path)
const APISignup = (data) => Signup('v13/signup/postsignup', data)

const API = {
    APIGetAllProduct,
    APIGetUserSignin,
    APIGetDataUser,
    APISendSms,
    APISignup
}

export default API