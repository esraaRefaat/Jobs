import React, { useState } from 'react';
import { auth, facebook } from "./firebaseConfig"; 
import { signInWithPopup, signOut } from "firebase/auth";
import { FacebookLoginButton } from "react-social-login-buttons";

function LoginWithFacebook() {
  const [isLogin, setIsLogin] = useState(false); 
  const [user, setUser] = useState(null); 

  const InitialState = () => (
    <>
      <h1>Login using facebook</h1>
      <FacebookLoginButton
        onClick={() => login(facebook)} 
      />
    </>
  );
  const LoginTrue = () => (
    <>
      <h1>Welcome!</h1>
      <p>
        Welcome {user.displayName}
      </p>
    
      </>
  );
 
  const login = async (provider) => {
    try {
     
      const result = await signInWithPopup(auth, provider);
     
      setUser(result.user); 
      console.log('dataaaa',result.user)
      setIsLogin(true); 
    } catch (e) {
     
      console.log(`login error ${e}`);
      setIsLogin(false); 
    }
  }
 
 
  return (
    <div>
      {isLogin ? <LoginTrue /> : <InitialState />}
    </div>
  )
}
export default LoginWithFacebook;