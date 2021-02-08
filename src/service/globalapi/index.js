import { getAllProduct } from "./allproduct/get/get";
import { getDataUser } from "./getuser/getuser";
import DeleteKeranjang from "./keranjang/DeleteKeranjang";
import GetKeranjang from "./keranjang/GetKeranjang";
import PostKeranjang from "./keranjang/PostKeranjang";
import SendSms from "./sendsms/SendSms";
import { getUserSignin } from "./signin/get";

const getStorage = JSON.parse(localStorage.getItem('userData'))

const APIGetAllProduct = (path) => getAllProduct(path)
const APIGetUserSignin = (data) => getUserSignin('v13/signup/login', data)
const APIGetDataUser = (path) => getDataUser(`v13/signup/getsignup/${path}`)
const APISendSms = (path) => SendSms(path)
const APIPostKeranjang = (data) => PostKeranjang('v7/makaroni/postkeranjang', data)
const APIGetKeranjang = () => GetKeranjang(`v7/makaroni/getkeranjang`)
const APIDeleteKeranjang = (id) => DeleteKeranjang(`v7/makaroni/postkeranjang/${id}`)

const API = {
    APIGetAllProduct,
    APIGetUserSignin,
    APIGetDataUser,
    APISendSms,
    APIPostKeranjang,
    APIGetKeranjang,
    APIDeleteKeranjang
}

export default API