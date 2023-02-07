import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SigIn = () => {
  const handleSignInGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignInGoogle}>Sign In with Google</button>

      <SignUpForm />
    </div>
  );
};

export default SigIn;
