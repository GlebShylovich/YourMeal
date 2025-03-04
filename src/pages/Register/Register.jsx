import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUserData } from "../../../services";
import { useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import image from "/img/pic.png";
import "./Register.scss";

export default function Register() {
  const navigate = useNavigate();
  const auth = getAuth();

  function handleRegister(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const userData = {
          email,
          username,
          id: user.uid,
          basket: "",
          orders: "",
        };
        await setUserData(userData, user.uid);
        navigate("/");
      })
      .catch(console.error);
  }

  return (
    <div className="register__overlay">
      <div className="register">
        <div className="register__image">
          <img src={image} alt="auth image" />
        </div>
        <div className="register__form">
          <Auth isRegistration={true} onSubmit={handleRegister} />
        </div>
      </div>
    </div>
  );
}
