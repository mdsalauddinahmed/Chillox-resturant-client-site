import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null);

 
const auth = getAuth(app);
const AuthProvider = ({children}) => {
     
    const [user,setUser]=useState(null)



    const CreateUser =(email,password)=>{
         
         return createUserWithEmailAndPassword(auth, email, password)
      }
      const signIn =(email,password)=>{
        
        return signInWithEmailAndPassword(auth, email, password)
      }
   
      const logOut =()=>{
        
        return  signOut(auth)
      }


      useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,loggedUser=>{
           console.log("user logged in observer",loggedUser)
           setUser(loggedUser)
            
          })
          return ()=>{
             unsubscribe()
          }
       },[])

      
      const authInformation ={
        user,
        CreateUser,
        signIn,
        logOut
      }


    return (
        <AuthContext.Provider value={authInformation}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;