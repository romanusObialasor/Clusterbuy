import React from "react";
import { motion } from "framer-motion";
import { useBoxContext } from "./BoxContext";

const Box4 = () => {
  const { isScaled } = useBoxContext();

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: isScaled ? 2 : 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "pink",
        margin: "100px auto",
      }}
    ></motion.div>
  );
};

export default Box4;
