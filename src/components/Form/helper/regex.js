export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!value.trim()) return "*Required";
  if (!emailRegex.test(value)) return "*Invalid email address";
  return null;
};
export const validatePassword = (value) => {
  const passwordRegex = /^.{8,}$/;

  if (!value.trim()) return "*Required";
  if (!passwordRegex.test(value)) return "*Must be 8 characters or more";
  return null;
};
export const validateName = (value) => {
  if (!value.trim()) return "*Required";
  return null;
};
