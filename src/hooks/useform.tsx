import { useState } from "react";

const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
    message: "Prencha um email válido",
  },
  password: {
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maísculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.",
  },
};

export function useForm(type: "email" | "password" | false) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function validate(value: string) {
    if (type === false) return true;

    if (value.length === 0) {
      setError("Prencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(e.target.value);
    setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
