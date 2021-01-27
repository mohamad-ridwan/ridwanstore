import SignupProvider from "./signup/Signup"


const WrappContext = ({ children }) => {
    return (
        <SignupProvider>
            {children}
        </SignupProvider>
    )
}

export default WrappContext