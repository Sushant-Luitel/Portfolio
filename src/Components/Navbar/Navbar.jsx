import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import dribble from "../../assets/dribbble.png";
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
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
          <a href="#">
            <img src={dribble} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
