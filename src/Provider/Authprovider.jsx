import React, {createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext = createContext()

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) =>{
     return   createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const logIn = (email,password) =>{
     return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider = new GoogleAuthProvider();

    const googleLogIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }


    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsuscribe()
        }
    },[])


    const authDAta = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        googleLogIn,
        loading,
        setLoading,

    }

    return <AuthContext value={authDAta}> {children}</AuthContext>
};

export default Authprovider;