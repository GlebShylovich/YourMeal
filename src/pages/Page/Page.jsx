import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setBasketData } from "../../../services";
import Nav from "../../components/Nav/Nav";
import Main from "../../components/Main/Main";

export default function Page({ data, title }) {
  const auth = getAuth();
  const navigate = useNavigate();
  const { id } = useSelector((state) => state.user);
  const basket = useSelector((state) => state.basket.items);

  async function logOut() {
    await setBasketData(basket, id);
    await signOut(auth);
    navigate("/login");
  }

  return (
    <div className="page">
      <button onClick={logOut}>Sign out</button>
      <Nav />
      <Main data={data} title={title} />
    </div>
  );
}
