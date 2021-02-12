import { getAllProduct } from "./allproduct/get/get";
import { getDataUser } from "./getuser/getuser";
import DeleteKeranjang from "./keranjang/DeleteKeranjang";
import GetKeranjang from "./keranjang/GetKeranjang";
import PostKeranjang from "./keranjang/PostKeranjang";
import SendSms from "./sendsms/SendSms";
import { getUserSignin } from "./signin/get";
import GetAllUser from "./signin/getalluser";
import PostSignup from "./signin/postsignup";
import SigninGoogle from "./signin/signingoogle";
import UpdatePassword from "./signin/updatepassword";
import UpdateUser from "./signin/updateuser";

const getStorage = JSON.parse(localStorage.getItem('userData'))

const APIGetAllProduct = (path) => getAllProduct(path)
const APIGetUserSignin = (data) => getUserSignin('v13/signup/login', data)
const APIGetDataUser = (path) => getDataUser(`v13/signup/getsignup/${path}`)
const APISendSms = (path) => SendSms(path)
const APIPostKeranjang = (data) => PostKeranjang('v7/makaroni/postkeranjang', data)
const APIGetKeranjang = () => GetKeranjang(`v7/makaroni/getkeranjang`)
const APIDeleteKeranjang = (id) => DeleteKeranjang(`v7/makaroni/postkeranjang/${id}`)
const APIUpdateUser = (path, data) => UpdateUser(`v13/signup/postsignup/${path}`, data)
const APIUpdatePassword = (id, data) => UpdatePassword(`v13/signup/postsignup2/${id}`, data)
const APIGetAllUser = () => GetAllUser(`v13/signup/getalluser`)
const APIPostSignup = (data) => PostSignup(`v13/signup/postsignup`, data)
const APISigninGoogle = (data) => SigninGoogle(`v13/signup/logingoogle`, data)

const API = {
    APIGetAllProduct,
    APIGetUserSignin,
    APIGetDataUser,
    APISendSms,
    APIPostKeranjang,
    APIGetKeranjang,
    APIDeleteKeranjang,
    APIUpdateUser,
    APIUpdatePassword,
    APIGetAllUser,
    APIPostSignup,
    APISigninGoogle
}

export default API