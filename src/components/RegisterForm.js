import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function output() {
    alert(
      `Hello, my name is ${formData.fname} ${formData.lname}. I'm ${formData.age} years old. I'm from ${formData.address}. My email address is ${formData.email}, and you can call me at ${formData.contact}. `
    );
  }

  return (
    <>
      <div className="main-div">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name="fname" onChange={handleChange} required />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name="lname" onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              name="contact"
              onChange={handleChange}
              required
            />
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" onChange={handleChange} required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {isSubmitted && output()}
    </>
  );
};
export default RegisterForm;
