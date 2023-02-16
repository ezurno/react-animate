import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
`;

const tagVarient: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Rect = styled(motion.div)`
  width: 300px;
  height: 300px;
  border: 5px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const MiniBox = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 25px;
  background-color: #ffffff;
  border: 5px solid black;
`;

const ballVarient: Variants = {
  click: {
    backgroundColor: "#000000",
    transition: {
      duration: 1,
    },
  },
  clickEnd: {
    backgroundColor: "#FFFFFF",
    transition: {
      duration: 1,
    },
  },
};

function Box() {
  const boxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper variants={tagVarient} initial="start" animate="end">
      <Rect ref={boxRef}>
        <MiniBox
          variants={ballVarient}
          drag
          exit="clickEnd"
          animate="click"
          dragConstraints={boxRef}
          dragElastic={0.2}
          dragSnapToOrigin
        />
      </Rect>
    </Wrapper>
  );
}

export default Box;
