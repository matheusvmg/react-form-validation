import React, { useState } from "react";
import "./style.css";
import useForm from "../../useForm";
import validateFields from "../../validateFields";

const Form = (props) => {
  const { handleChange, handleSubmit, values, erros } = useForm(validateFields);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="labels" htmlFor="name">
          User Name
        </label>

        {erros.name ? (
          <input
            type="text"
            className="error"
            name="name"
            onChange={handleChange}
          />
        ) : (
          <input
            type="text"
            className="inputs"
            name="name"
            onChange={handleChange}
          />
        )}
        {erros.name && <p className="feedback">{erros.name}</p>}

        <label className="labels" htmlFor="email">
          Email
        </label>

        {erros.email ? (
          <input
            type="email"
            className="error"
            name="email"
            onChange={handleChange}
          />
        ) : (
          <input
            type="email"
            className="inputs"
            name="email"
            onChange={handleChange}
          />
        )}
        {erros.email && <p className="feedback">{erros.email}</p>}

        <label className="labels" htmlFor="password">
          Password
        </label>

        {erros.password ? (
          <input
            type="password"
            className="error"
            name="password"
            onChange={handleChange}
          />
        ) : (
          <input
            type="password"
            className="inputs"
            name="password"
            onChange={handleChange}
          />
        )}
        {erros.password && <p className="feedback">{erros.password}</p>}

        <label className="labels" htmlFor="password2">
          Confirm Password
        </label>

        {erros.password2 ? (
          <input
            type="password"
            className="error"
            name="password2"
            onChange={handleChange}
          />
        ) : (
          <input
            type="password"
            className="inputs"
            name="password2"
            onChange={handleChange}
          />
        )}
        {erros.password2 && <p className="feedback">{erros.password2}</p>}

        <button type="submit" className="btn-signup">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
