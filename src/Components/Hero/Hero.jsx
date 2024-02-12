import React from "react";
import profile from "../../assets/profilep.png";
import scroll from "../../assets/scroll.png";
import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="Hero">
      <div className="container row">
        <motion.div
          className="hero-text"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Sushant Luitel</motion.h2>

          <motion.h1 variants={textVariants}>
            Frontend Web <br />
            Developer(ReactJS)
          </motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="btn-navy" variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button className="btn-whitevariants={textVariants}  ">
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            className="scroll-image"
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt="scroll"
            width={30}
          />
        </motion.div>
        <div className="sliding-text-container">Developer Content Creator</div>
        <div className="image-container">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
