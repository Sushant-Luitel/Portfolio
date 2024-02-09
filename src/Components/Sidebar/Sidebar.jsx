import React, { useState } from "react";
import "./Sidebar.scss";
import Links from "./Links";
import { motion } from "framer-motion";
import close from "../../assets/close.png";
import hamburger from "../../assets/hamburger.png";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      trasition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <button
        className="sidebar-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <img src={close} width={20} alt="logo" />
        ) : (
          <img src={hamburger} width={20} alt="logo" />
        )}
      </button>
    </motion.div>
  );
};
export default Sidebar;
Sidebar;
