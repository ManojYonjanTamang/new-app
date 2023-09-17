import React from "react";

const Greetings = () => {
  var timeNow = new Date(2023, 4, 17, 20);
  var hourNow = timeNow.getHours();

  var greet, bgText;
  if (hourNow >= 5 && hourNow < 12) {
    greet = "Good Morning";
    bgText = "#FFC107";
  } else if (hourNow >= 12 && hourNow < 18) {
    greet = "Good Afternoon";
    bgText = "#DD2C00";
  } else {
    greet = "Good Evening";
    bgText = "#1A237E";
  }

  const styles = {
    color: bgText,
  };

  return (
    <>
      <div className="main-background">
        <div className="small-background">
          <h1>
            Hello, <span style={styles}>{greet}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Greetings;
