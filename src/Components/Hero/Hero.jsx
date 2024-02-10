import React from "react";
import profile from "../../assets/profile.png";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h2>Sushant Luitel</h2>
          <h1>Frontend Web Developer(ReactJS)</h1>
          <div className="buttons">
            {" "}
            <button>See the Latest Works</button>
            <button>Contact me</button>
          </div>
        </div>
      </div>

      <img src={profile} alt="profile" width={200} />
    </div>
  );
};

export default Hero;
