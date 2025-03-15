import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import image from "/img/pic.png";
import "./Login.scss";

export default function Login() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [error, setError] = useState(null);

  function handleLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          setError("Invalid password");
        } else {
          setError("Too many attempts");
        }
      });
  }

  return (
    <div className="login__overlay">
      <div className="login">
        <div className="login__image">
          <img src={image} alt="auth image" />
        </div>
        <div className="login__form">
          <Auth isRegistration={false} onSubmit={handleLogin} error={error} />
        </div>
      </div>
    </div>
  );
}
