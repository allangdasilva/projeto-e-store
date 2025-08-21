import React from "react";
import Input from "../Form/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, validateToken } from "../../redux/user/login-reducer";
import Button from "../Form/Button";
import { validateEmail, validatePassword } from "../Form/helper/regex";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.login);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      dispatch(loginAsync(email, password));
    }
  };

  React.useEffect(() => {
    if (data?.access_token) {
      dispatch(validateToken());
      navigate("/", { replace: true });
    }
  }, [data, dispatch]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name={`email`}
          type={`email`}
          label={`Email`}
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          autoComplete={`email`}
          onBlur={({ target }) => setEmailError(validateEmail(target.value))}
        />
        {emailError && <p>{emailError}</p>}
        <Input
          name={`password`}
          type={`password`}
          label={`Password`}
          onChange={({ target }) => setPassword(target.value)}
          value={password}
          autoComplete={`password`}
          onBlur={({ target }) =>
            setPasswordError(validatePassword(target.value))
          }
        />
        {passwordError && <p>{passwordError}</p>}
        {data?.message && <p>User Not Found</p>}
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Login</Button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
