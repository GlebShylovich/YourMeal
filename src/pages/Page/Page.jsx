import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/login");
    });
    return unsubscribe;
  }, [auth, navigate]);

  return (
    <div className="page">
      <h1>YourMeal</h1>
      <button type="button" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  );
}
