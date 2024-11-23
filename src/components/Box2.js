import React, { useState } from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  const action = {
    initial: { scale: 0.5, backgroundColor: "red", opacity: 1 },
    clicked: { scale: 1, backgroundColor: "blue", opacity: 1 },
  };

  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      onClick={() => setClicked((prev) => !prev)}
      variants={action}
      initial="initial"
      animate={clicked ? "clicked" : "initial"}
      transition={{ duration: 3, ease: "easeInOut" }}
      style={{
        width: "200px",
        height: "200px",
        margin: "auto",
      }}
    ></motion.div>
  );
};

export default Box2;
