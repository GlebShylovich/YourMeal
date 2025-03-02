import { useEffect, createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserData } from "../services";
import { setUser } from "./redux/reducers/userSlice";
import { setBasket } from "./redux/reducers/basketSlice";
import { getPaths } from "./common/paths";
import { Routes, Route, useNavigate } from "react-router-dom";
import data from "../data.json";
import Page from "./pages/Page/Page";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const GlobalContext = createContext();

export default function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paths = getPaths();

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
            dispatch(setBasket(userData.basket));
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [auth]);
  return (
    <GlobalContext.Provider value={paths}>
      <Routes>
        {data.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={<Page data={item.items} title={item.title} />}
          />
        ))}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
    </GlobalContext.Provider>
  );
}
