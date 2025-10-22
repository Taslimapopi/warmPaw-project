import React, {createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext()

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
     return   createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    const logIn = (email,password) =>{
     return signInWithEmailAndPassword(auth,email,password)
    }

    console.log(user)
    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
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
        logIn

    }

    return <AuthContext value={authDAta}> {children}</AuthContext>
};

export default Authprovider;