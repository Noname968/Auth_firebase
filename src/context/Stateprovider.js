import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';

const statecontext = createContext();

function Stateprovider({ children }) {
    const [currentuser, setcurrentuser] = useState();
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function resetpassword(email) {
        return sendPasswordResetEmail(email)
    }

    function updateemail(email) {
        return updateEmail(currentuser,email)
    }

    function updatepassword(password) {
        return updatePassword(currentuser,password)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentuser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])
    const value = {
        currentuser,
        signup,
        login,
        logout,
        resetpassword,
        updateemail,
        updatepassword
    }
    return (
        <statecontext.Provider value={value}>
            {!loading && children}
        </statecontext.Provider>
    )
}

export default Stateprovider

export function useAuth() {
    return useContext(statecontext)
}