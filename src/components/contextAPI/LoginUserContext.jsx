import {createContext, useState} from "react";

export const LoginUser = createContext(null)

export default function LoginUserContext({children}) {
    const [user, setUser] = useState({username: "", password: ""})

    // eslint-disable-next-line react/jsx-no-undef
    return <LoginUser.Provider value={{user, setUser}}>
        {children}
    </LoginUser.Provider>
}