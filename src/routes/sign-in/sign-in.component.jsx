import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../firebase/firebase.utils";

const SigIn = () => {
  const handleSignInGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignInGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SigIn;
