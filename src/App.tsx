import React from "react";
import styled from "styled-components";
import { Variants, motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center; // justify-self, align-self를 합친 축약형
`;

const BoxVarient: Variants = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5, // 자식 tag를 따로 delay 하지 않고 부모 tag에서 지정 가능
      staggerChildren: 0.2, // 자식 tag를 순차적으로 delay를 걸어줌
    },
  },
};

const CircleVarient: Variants = {
  //Varients로 type을 걸어주면 안정성 up
  start: {
    opacity: 0,
    y: 100, // y축을 100에서 시작
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={BoxVarient} initial="start" animate="end">
        <Circle variants={CircleVarient} />
        {/* Box의 varients 의 값을 Circle이 자동으로 inherit 해서 받아옴 => override */}
        <Circle variants={CircleVarient} />
        <Circle variants={CircleVarient} />
        <Circle variants={CircleVarient} />
      </Box>
    </Wrapper>
  );
}

export default App;
