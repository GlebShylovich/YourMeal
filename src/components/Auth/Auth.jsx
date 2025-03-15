import { useForm } from "react-hook-form";
import { checkEmailExists } from "../../../services";
import { Link } from "react-router-dom";
import "./Auth.scss";

export default function Auth({ isRegistration, onSubmit, error }) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const handleAuthSubmit = async (data) => {
    const { username, email, password, passwordConfirm } = data;
    if (isRegistration) {
      if (password !== passwordConfirm) {
        setError("passwordConfirm", {
          type: "manual",
          message: "Passwords don't match",
        });
        setValue("passwordConfirm", "");
        return;
      }
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setError("email", { type: "manual", message: "Email already exists" });
        setValue("email", "");
        return;
      }
      clearErrors("email");
      onSubmit(email, password, username);
    } else {
      await onSubmit(email, password);
    }
  };

  return (
    <form className="auth" onSubmit={handleSubmit(handleAuthSubmit)}>
      <h1 className="auth__title">
        {isRegistration ? "Registration" : "Login"}
      </h1>
      {isRegistration && (
        <div className="auth__input-wrapper">
          <label
            className={`auth__label ${
              errors.username ? "auth__label--error" : ""
            }`}
          >
            {errors.username ? errors.username.message : "Username"}
          </label>
          <input
            className={`auth__input ${
              errors.username ? "auth__input--error" : ""
            }`}
            type="text"
            {...register("username", {
              required: "Username is required",
              maxLength: { value: 20, message: "Max length is 20" },
              minLength: { value: 3, message: "Min length is 3" },
            })}
          />
        </div>
      )}
      <div className="auth__input-wrapper">
        <label
          className={`auth__label ${errors.email ? "auth__label--error" : ""}`}
        >
          {errors.email ? errors.email.message : "Email"}
        </label>
        <input
          className={`auth__input ${errors.email ? "auth__input--error" : ""}`}
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
      </div>
      <div className="auth__input-wrapper">
        {error ? (
          <label className="auth__label auth__label--error">{error}</label>
        ) : (
          <label
            className={`auth__label ${
              errors.password || error ? "auth__label--error" : ""
            }`}
          >
            {errors.password ? errors.password.message : "Password"}
          </label>
        )}
        <input
          className={`auth__input ${
            errors.password || error ? "auth__input--error" : ""
          }`}
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min length is 6" },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: "Password must contain letters and numbers",
            },
          })}
        />
      </div>
      {isRegistration && (
        <div className="auth__input-wrapper">
          <label
            className={`auth__label ${
              errors.passwordConfirm ? "auth__label--error" : ""
            }`}
          >
            {errors.passwordConfirm
              ? errors.passwordConfirm.message
              : "Confirm password"}
          </label>
          <input
            className={`auth__input ${
              errors.passwordConfirm ? "auth__input--error" : ""
            }`}
            type="password"
            {...register("passwordConfirm", {
              required: "Confirm Password is required",
              minLength: { value: 6, message: "Min length is 6" },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: "Password must contain letters and numbers",
              },
            })}
          />
        </div>
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
