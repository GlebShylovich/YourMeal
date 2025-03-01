import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUserData } from "../../../services";
import { useNavigate } from "react-router-dom";
import Auth from "../../components/Auth/Auth";

export default function Register() {
  const navigate = useNavigate();
  const auth = getAuth();

  function handleRegister(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({user}) => {
        await setUserData({email, username, id: user.uid})
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
