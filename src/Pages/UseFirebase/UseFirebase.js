/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import initializeAuthintication from "../Firebase/firebase.initialize"
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    initializeAuthintication();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    const logOut = () => {
        return signOut(auth);
    }

    return {
        signInUsingGoogle,
        logOut,
        user,
        setUser,
        error,
        setError
    }
}

export default UseFirebase;