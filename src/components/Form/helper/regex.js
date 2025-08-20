export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) return "*Required";
  if (!emailRegex.test(value)) return "*Invalid email address";
  return null;
};
export const validatePassword = (value) => {
  const passwordRegex = /^.{8,}$/;

  if (!value) return "*Required";
  if (!passwordRegex.test(value)) return "*Must be 8 characters or more";
  return null;
};
