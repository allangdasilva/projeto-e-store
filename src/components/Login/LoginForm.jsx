import React from "react";
import Input from "../Form/Input";
import { useDispatch, useSelector } from "react-redux";
import { userAsync } from "../../redux/user/user-reducer";
import Button from "../Form/Button";
import { validateEmail, validatePassword } from "../Form/helper/regex";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      dispatch(userAsync(email, password));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name={`email`}
          type={`email`}
          label={`Email`}
          setPassword={setEmail}
          value={email}
          autoComplete={`email`}
          onBlur={({ target }) => setEmailError(validateEmail(target.value))}
        />
        {emailError && <p>{emailError}</p>}
        <Input
          name={`password`}
          type={`password`}
          label={`Password`}
          setPassword={setPassword}
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
