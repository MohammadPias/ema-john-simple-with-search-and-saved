import initializeAuthentication from "../firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    initializeAuthentication();

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider)
            
    };
    //sign out================
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser({});
            })
            .catch(error => {
                setError(error.message)
            });
    };
    // ON State Change==========
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        error,
        handleGoogleSignIn,
        handleSignOut
    };
};
export default useFirebase;