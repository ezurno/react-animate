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
  initial: (back: Boolean) => ({
    opacity: 0,
    scale: 0,
    x: back ? -300 : 300,
  }),

  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },

  exit: (back: Boolean) => ({
    x: back ? 300 : -300,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  }),
};

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [back, setBack] = useState(false);

  const onNext = async () => {
    await setBack(false);
    setPageNumber((page) => (page === 10 ? 10 : page + 1));
  };
  const onPrev = async () => {
    await setBack(true);
    // code 엔 영향을 주지 않지만 set이 실행 되기 전에 setPageNumber가 먼저 실행 되어 방향이 뒤틀리게 됨 => 비동기식 처리로 해결
    setPageNumber((page) => (page === 1 ? 1 : page - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence mode="wait" custom={back}>
        <Box
          custom={back}
          variants={BoxVarient}
          initial="initial"
          exit="exit"
          animate="animate"
          key={pageNumber}
        >
          {pageNumber}
        </Box>
      </AnimatePresence>
      <button onClick={onNext}>Next</button>
      <button onClick={onPrev}>Prev</button>
    </Wrapper>
  );
}

export default App;
