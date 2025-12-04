import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user site
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sing email and password
  const singEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   log Out user
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  //  current user observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (allUser) => {
      // console.log("current user observer", allUser);

      const userEmail = allUser?.email || user?.email;
      const loggerUser = { email: userEmail };
      setUser(allUser);
      setLoading(false);

      // JWT token post
      if (allUser) {
        axios
          .post("https://car-doctor-server-mauve.vercel.app/jwt", loggerUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("this Token", res.data);
          });
      } else {
        axios
          .post(
            "https://car-doctor-server-mauve.vercel.app/logout",
            loggerUser,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    singEmailPassword,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
