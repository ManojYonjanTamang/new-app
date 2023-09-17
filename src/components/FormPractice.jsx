import React, { useState } from "react";
import "./FormPractice.css";

const FormPractice = () => {
  const [formData, setFormData] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form__heading">Submission Form</h1>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="form__input"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="form__input"
        />
        <button type="submit" className="form__button">
          Submit
        </button>
      </form>
      {isSubmitted && (
        <>
          {alert(
            `Hello ${formData.name}, your email address is ${formData.email}`
          )}
        </>
      )}
    </>
  );
};

export default FormPractice;
