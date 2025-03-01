import { useState } from "react";
import { Link } from "react-router-dom";

export default function Auth({ isRegistration, onSubmit }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (isRegistration) {
      if (password !== passwordConfirm) return;
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
          className="auth__input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      )}
      <input
        className="auth__input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        className="auth__input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {isRegistration && (
        <input
          className="auth__input"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirm password"
          required
        />
      )}
      <button className="auth__button" type="submit">
        {isRegistration ? "Register" : "Login"}
      </button>
      <Link to={isRegistration ? "/login" : "/registration"}>Go to {isRegistration ? "Login" : "Registration"}</Link>
    </form>
  );
}
