import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";

export default function Register() {
  const navigate = useNavigate();
  const auth = getAuth();

  function handleRegister(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  }

  return (
    <div className="register">
      <Auth isRegistration={true} onSubmit={handleRegister} />
    </div>
  );
}
