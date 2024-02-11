import React from "react";
import profile from "../../assets/profilep.png";
import scroll from "../../assets/scroll.png";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="container row">
        <div className="hero-text">
          <h2>Sushant Luitel</h2>

          <h1>
            Frontend Web <br />
            Developer(ReactJS)
          </h1>

          <div className="buttons">
            <button className="btn-navy">See the Latest Works</button>
            <button className="btn-white">Contact me</button>
          </div>
          <img className="scroll-image" src={scroll} alt="scroll" width={30} />
        </div>
        <div className="image-container">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
