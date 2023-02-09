import { createContext, useState, useEffect } from "react";

import {
  onAuthListener,
  createUserDocumentFromAuth,
} from "../firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthListener(async (user) => {
      if (user) await createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return () => unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
