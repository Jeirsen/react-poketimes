import React from "react";
// High Order component
const Rainbow = WrappedComponent => {
  const colours = ["red", "pink", "orange", "blue", "green", "yellow"];
  let randomColour = colours[Math.floor(Math.random() * 5)];
  let className = randomColour + "-text";
  console.log(className);

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
