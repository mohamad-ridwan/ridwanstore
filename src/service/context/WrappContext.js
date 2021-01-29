import GetUserSigninProvider from "./getusersignin/GetUserSignin"
import SignupProvider from "./signup/Signup"


const WrappContext = ({ children }) => {
    return (
        <GetUserSigninProvider>
            <SignupProvider>
                {children}
            </SignupProvider>
        </GetUserSigninProvider>
    )
}

export default WrappContext