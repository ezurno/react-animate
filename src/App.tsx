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
  justify-content: space-around;
  align-items: center;
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
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BoxVarient: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  exit: {
    opacity: 0,
    y: 60,
  },
};

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible((current) => !current);
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {visible ? (
          <Box
            variants={BoxVarient}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={onClick}>Click this</button>
    </Wrapper>
  );
}

export default App;
