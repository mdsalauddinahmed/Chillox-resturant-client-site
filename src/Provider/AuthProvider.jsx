import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null);

 
const auth = getAuth(app);
const AuthProvider = ({children}) => {
     
    const [user,setUser]=useState(null)
    const [reload,setReload]=useState(true)



    const CreateUser =(email,password)=>{
          setReload(true)
         return createUserWithEmailAndPassword(auth, email, password)
      }
      const signIn =(email,password)=>{
        setReload(true)
        return signInWithEmailAndPassword(auth, email, password)
      }

      useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,loggedUser=>{
           console.log("user logged in observer",loggedUser)
           setUser(loggedUser)
           setReload(false)
            
          })
          return ()=>{
             unsubscribe()
          }
       },[])

   const userProfileUpdate =(user,name,photo)=>{
   return updateProfile(user,{
          displayName: name  , photoURL:  photo
        })
      }

      const Provider = new GoogleAuthProvider();
      const GitProvider = new GithubAuthProvider();


      const logInWithGoogle =()=>{

        return signInWithPopup(auth,Provider)
      }
      
   const logInWithGithub =()=>{
     return signInWithPopup(auth, GitProvider)
   }



      const logOut =()=>{
        setReload(true)
        return  signOut(auth)
      }


      

      
      const authInformation ={
        user,
        CreateUser,
        signIn,
        logOut,
        reload, 
        userProfileUpdate,
        logInWithGoogle,
        logInWithGithub
      }


    return (
        <AuthContext.Provider value={authInformation}>
            {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;