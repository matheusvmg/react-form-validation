import { useState, useEffect } from "react";

const useForm = (validateFields) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErros(validateFields(values));
  };

  return { handleChange, handleSubmit, values, erros };
};

export default useForm;
