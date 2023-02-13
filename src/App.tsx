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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
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
    x: 300,
  },

  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },

  exit: {
    x: -300,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const onNext = () => {
    setPageNumber((page) => (page === 10 ? 10 : page + 1));
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) =>
          page === pageNumber ? (
            <Box
              variants={BoxVarient}
              initial="initial"
              exit="exit"
              animate="animate"
              key={page}
            >
              {page}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={onNext}>Next</button>
    </Wrapper>
  );
}

export default App;
