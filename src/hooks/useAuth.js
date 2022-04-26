import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return { user };
};

export default useAuth;
