export const validateUsername = {
  required: "Required input username",
  minLength: { value: 5, message: "Min length 5" },
  maxLength: { value: 100, message: "Max length 100" },
};

export const validatePassword = {
  required: "Required input password",
  minLength: { value: 8, message: "Min length 8" },
  maxLength: { value: 100, message: "Max length 100" },
};
