import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import image from "/img/pic.png";
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const auth = getAuth();

  function handleLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  }

  return (
    <div className="login__overlay">
      <div className="login">
        <div className="login__image">
          <img src={image} alt="auth image" />
        </div>
        <div className="login__form">
          <Auth isRegistration={false} onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
}
