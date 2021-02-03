import Signup from "../../pages/signup/Signup";
import { getAllProduct } from "./allproduct/get/get";
import { getDataUser } from "./getuser/getuser";
import PostKeranjang from "./keranjang/PostKeranjang";
import SendSms from "./sendsms/SendSms";
import { getUserSignin } from "./signin/get";

const getStorage = JSON.parse(localStorage.getItem('userData'))

const APIGetAllProduct = (path) => getAllProduct(path)
const APIGetUserSignin = (data) => getUserSignin('v13/signup/login', data)
const APIGetDataUser = (path) => getDataUser(`v13/signup/getsignup/${path}`)
const APISendSms = (path) => SendSms(path)
const APISignup = (data) => Signup('v13/signup/postsignup', data)
const APIPostKeranjang = (data) => PostKeranjang('v7/makaroni/postkeranjang', data)

const API = {
    APIGetAllProduct,
    APIGetUserSignin,
    APIGetDataUser,
    APISendSms,
    APISignup,
    APIPostKeranjang
}

export default API