import { useContext } from 'react'
import { MyContext } from './AuthProvider';

function useAuth() {
    return useContext(MyContext);
}

export default useAuth
