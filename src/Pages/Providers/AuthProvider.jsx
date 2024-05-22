import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase";

  export const AuthContext = createContext(null);
  
  const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);


    const SignUp = (email, password ) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const UpdateUserData = (userName, img) => {
        return updateProfile(auth.currentUser, {
          displayName: userName, 
          photoURL: img,
        });
      };


    const SignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const SignOut =() =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          //CleanUP
          unSubscribe();
        };
      }, []);
      






  
    const authInfo = {
       SignUp, SignIn, SignOut, UpdateUserData, user
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  