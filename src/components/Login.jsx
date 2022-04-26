import React from "react";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const { user } = useAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    console.log("Heyy");
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        style={{ display: user ? "none" : "" }}
      >
        Login
      </button>
      <button onClick={() => signOut()} style={{ display: user ? "" : "none" }}>
        Logout
      </button>
    </div>
  );
};

export default Login;
