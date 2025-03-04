export function validateAuth(
  isRegistration,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm
) {
  const errors = {};
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (isRegistration && username.trim().length < 3) {
    errors.usernameError = "At least 3 characters long";
    setUsername("");
  }
  if (!emailReg.test(email)) {
    errors.emailError = "Invalid email";
    setEmail("");
  }
  if (!passwordReg.test(password)) {
    errors.passwordError = "More than 6 characters, letters & numbers";
    setPassword("");
  }
  if (isRegistration && password !== passwordConfirm) {
    errors.passwordConfirmError = "Passwords don't match";
    setPasswordConfirm("");
  }

  return errors;
}
