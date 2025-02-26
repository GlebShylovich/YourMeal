import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";

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
    <div className="login">
      <Auth isRegistration={false} onSubmit={handleLogin} />
    </div>
  );
}
