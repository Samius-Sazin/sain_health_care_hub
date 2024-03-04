import { createContext } from 'react'
import UseFirebase from '../UseFirebase/UseFirebase';

export const MyContext = createContext();

function AuthProvider({ children }) {
    const AllContext = UseFirebase();

    return (
        <MyContext.Provider value={AllContext}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthProvider
