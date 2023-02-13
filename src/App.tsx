import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Variants,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  useScroll,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e09, #d0e);
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 100px;
  display: flex;

  font-size: 28px;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(35, 103, 221, 0.8);
`;

function App() {
  const [touch, setTouch] = useState(false);
  const onClick = () => {
    setTouch((current) => !current);
  };

  return (
    <Wrapper>
      <Box
        style={{
          justifyContent: touch ? "center" : "flex-start",
          alignItems: touch ? "center" : "flex-start",
        }}
      >
        <Circle layout />
      </Box>

      <button onClick={onClick}>Click me</button>
    </Wrapper>
  );
}

export default App;
