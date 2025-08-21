import React from "react";
import Input from "../Form/Input";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../Form/helper/regex";
import Button from "../Form/Button";
import { useDispatch, useSelector } from "react-redux";
import { resetState, signUpAsync } from "../../redux/user/sign-up-reducer";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState(null);
  const [lastNameError, setLastNameError] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.sign_up);
  const { data: dataUser } = useSelector((state) => state.login);

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstNameValidation = validateName(firstName);
    const lastNameValidation = validateName(lastName);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setFirstNameError(firstNameValidation);
    setLastNameError(lastNameValidation);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (
      !firstNameValidation &&
      !lastNameValidation &&
      !emailValidation &&
      !passwordValidation
    ) {
      dispatch(signUpAsync(firstName, lastName, email, password));
    }
  };

  React.useEffect(() => {
    if (data) {
      dispatch(resetState());
      navigate("/login", { replace: true });
    }
    if (dataUser?.access_token) {
      navigate("/");
    }
  }, [data, dataUser, dispatch]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name={`firstName`}
          type={`text`}
          label={`First Name`}
          onChange={({ target }) => setFirstName(target.value)}
          value={firstName}
          autoComplete={`given-name`}
          onBlur={({ target }) => setFirstNameError(validateName(target.value))}
        />
        {firstNameError && <p>{firstNameError}</p>}
        <Input
          name={`lastName`}
          type={`text`}
          label={`Last Name`}
          onChange={({ target }) => setLastName(target.value)}
          value={lastName}
          autoComplete={`family-name`}
          onBlur={({ target }) => setLastNameError(validateName(target.value))}
        />
        {lastNameError && <p>{lastNameError}</p>}
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
        {error && <p>{error}</p>}

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

        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Sign Up</Button>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
