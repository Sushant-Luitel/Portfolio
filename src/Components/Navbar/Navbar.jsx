import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { motion } from "framer-motion";
import "./Navbar.scss";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="Navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Sushant Luitel
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=100086637275771"
            target="__blank"
          >
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/__sushantluitel/" target="__blank">
            <img src={instagram} alt="" />
          </a>
          <a href="https://github.com/Sushant-Luitel" target="__blank">
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/sushant-luitel/"
            target="__blank"
          >
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
