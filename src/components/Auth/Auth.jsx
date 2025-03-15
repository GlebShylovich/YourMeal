import { useState } from "react";
import { validateAuth } from "./validate";
import { checkEmailExists } from "../../../services";
import { Link } from "react-router-dom";
import "./Auth.scss";

export default function Auth({ isRegistration, onSubmit }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [authErrors, setAuthErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validateAuth(
      isRegistration,
      email,
      setEmail,
      username,
      setUsername,
      password,
      setPassword,
      passwordConfirm,
      setPasswordConfirm
    );
    setAuthErrors(errors);

    if (Object.keys(errors).length > 0) return;

    if (isRegistration) {
      const isExist = await checkEmailExists(email);
      if (isExist) {
        setAuthErrors((prev) => ({
          ...prev,
          emailError: "Email is already in use",
        }));
        setEmail("");
        return;
      }
      onSubmit(email, password, username);
    } else {
      onSubmit(email, password);
    }
  }

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <h1 className="auth__title">
        {isRegistration ? "Registration" : "Login"}
      </h1>
      {isRegistration && (
        <input
          className={
            authErrors.usernameError ? "auth__input auth__input--error" : "auth__input"
          }
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={authErrors.usernameError || "Username"}
          required
        />
      )}
      <input
        className={authErrors.emailError ? "auth__input auth__input--error" : "auth__input"}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={authErrors.emailError || "Email"}
        autocomplete="off"
        required
      />
      <input
        className={
          authErrors.passwordError ? "auth__input auth__input--error" : "auth__input"
        }
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={authErrors.passwordError || "Password"}
        required
      />
      {isRegistration && (
        <input
          className={
            authErrors.passwordConfirmError
              ? "auth__input auth__input--error"
              : "auth__input"
          }
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder={authErrors.passwordConfirmError || "Confirm password"}
          required
        />
      )}
      <button className="auth__button" type="submit">
        {isRegistration ? "Register" : "Login"}
      </button>
      <div className="auth__redirect">
        <p>{isRegistration ? "Already have an account?" : "No account?"}</p>
        <Link to={isRegistration ? "/login" : "/registration"}>
          {isRegistration ? "Login" : "Registration"}
        </Link>
      </div>
    </form>
  );
}
