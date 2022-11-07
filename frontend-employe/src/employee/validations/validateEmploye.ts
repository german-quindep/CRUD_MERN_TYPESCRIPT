export const validateSalary = {
  required: "Required input salary",
  maxLength: { value: 2, message: "Max length 2" },
};

export const validateHours = {
  required: "Required input hours",
  maxLength: { value: 2, message: "Max length 100" },
};

export const validateDeparment = {
  required: "Required input deparment",
  minLength: { value: 5, message: "Min length 5" },
  maxLength: { value: 20, message: "Max length 20" },
};

export const validatePerson = {
  required: "Required input Person",
};
