import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // Scenario 1: useEffect with no dependencies (equivalent to componentDidMount)
  useEffect(() => {
    console.log("Component mounted");

    // Clean-up function (equivalent to componentWillUnmount)
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Scenario 2: useEffect with a dependency (equivalent to componentDidUpdate)
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  // Scenario 3: Fetching data with useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
