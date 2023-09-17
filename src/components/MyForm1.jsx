import React, { useState } from "react";

const MyForm1 = () => {
  const [showForm, setShowForm] = useState({});
  const [gotData, setGotData] = useState(false);

  function showData(e) {
    const { name, value } = e.target;
    setShowForm({ ...showForm, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setGotData(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" onChange={showData} />
        <input type="email" name="email" onChange={showData} />
        <button type="submit">Submit</button>
      </form>

      {gotData ? <p>{showForm.email}</p> : <h1>No data</h1>}
    </>
  );
};

export default MyForm1;
