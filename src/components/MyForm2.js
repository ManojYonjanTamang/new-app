import React, { useState } from "react";

const MyForm2 = () => {
  const [showData, setShowData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleInput(e) {
    const { name, value } = e.target;
    setShowData({ ...showData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" name="number" onChange={handleInput} />
        <input type="time" name="time" onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      {isSubmit && <p>{showData.number}</p>}
    </>
  );
};

export default MyForm2;
