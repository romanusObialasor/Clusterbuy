// import React, { useState } from "react";
// import Box2 from "./Box2";

// const Box1 = () => {
//   const [showBox2, setShowBox2] = useState(false);

//   const handleClick = () => {
//     setShowBox2(true);
//   };

//   return (
//     <div>
//       <div
//         onClick={handleClick}
//         style={{
//           width: "100px",
//           height: "100px",
//           backgroundColor: "green",
//           margin: "auto",
//           cursor: "pointer",
//         }}
//       ></div>
//       {showBox2 && <Box2 />}
//     </div>
//   );
// };

// export default Box1;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Box1 = () => {
  return (
    <div>
      <Link to="/box2">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          style={{
            width: "100px",
            height: "100px",
            background: "red",
          }}
        />
      </Link>
    </div>
  );
};

export default Box1;
