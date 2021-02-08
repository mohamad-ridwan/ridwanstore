import FormDataProvider from "./formdata/FormData"
import GetUserSigninProvider from "./getusersignin/GetUserSignin"
import KeranjangProvider from "./keranjang/Keranjang"

const WrappContext = ({ children }) => {
    return (
        <KeranjangProvider>
            <FormDataProvider>
                <GetUserSigninProvider>
                    {children}
                </GetUserSigninProvider>
            </FormDataProvider>
        </KeranjangProvider>
    )
}

export default WrappContext