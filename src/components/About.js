import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas, et
        vero corporis facilis dolore tempore alias quod porro delectus,
        similique reprehenderit voluptatibus doloremque placeat exercitationem
        adipisci in nam eaque.
      </p>
    </div>
  );
};

export default Rainbow(About);
