import FormDataProvider from "./formdata/FormData"
import GetUserSigninProvider from "./getusersignin/GetUserSignin"

const WrappContext = ({ children }) => {
    return (
        <FormDataProvider>
            <GetUserSigninProvider>
                {children}
            </GetUserSigninProvider>
        </FormDataProvider>
    )
}

export default WrappContext