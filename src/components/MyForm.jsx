import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label>

        <button type="submit">Submit</button>
      </form>

      {isSubmitted ? (
        <div>
          <p>Submitted form data:</p>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      ) : (
        <div>NO DATA AVAILABLE</div>
      )}
    </div>
  );
}
export default MyForm;
