import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
export const AuthContext = createContext(null);

 
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   
    const CreateUser =(email,password)=>{
         
         return createUserWithEmailAndPassword(auth, email, password)
      }
      const user = {displayName:"amir"}
      const authInformation ={
        user,
        CreateUser
      }


    return (
        <AuthContext.Provider value={authInformation}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;