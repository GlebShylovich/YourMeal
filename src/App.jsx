import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserData } from "../services";
import { setUser } from "./redux/reducers/userSlice";
import { Routes, Route, useNavigate } from "react-router-dom";
import Page from "./pages/Page/Page";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export default function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userData = await getUserData(user.uid);
          if (userData) {
            dispatch(
              setUser({
                email: userData.email,
                username: userData.username,
                id: user.uid,
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        navigate("/login")
      }
    });
    return () => unsubscribe();
  }, [auth]);
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Register />} />
    </Routes>
  );
}
