import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import App from "../../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(App);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateUserProfile(auth.currentUser, profile);
  };

  const verifyEmail = ()=>{
    return sendEmailVerification(auth.currentUser)
  }


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("user inside state change", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    providerLogin,
    logOut,
    createUser,
    signIn,
    loading,
    updateUserProfile,
    verifyEmail,
    
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
