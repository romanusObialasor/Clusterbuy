import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useBoxContext } from "./BoxContext";

const Box3 = () => {
  const navigate = useNavigate();
  const { setIsScaled } = useBoxContext();

  const handleClick = () => {
    setIsScaled(true); // Set the scale state
    navigate("/box4"); // Navigate to Box4
  };

  return (
    <motion.div
      onClick={handleClick}
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "blue",
        cursor: "pointer",
        margin: "100px auto",
      }}
    ></motion.div>
  );
};

export default Box3;
