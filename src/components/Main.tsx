import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  overflow: hidden;
  h1 {
    font-size: 120px;
    position: absolute;
    user-select: none;
    opacity: 0.3;
    font-family: "Oswald", sans-serif;
  }
`;

const Word = styled(motion.div)`
  height: fit-content;
  width: fit-content;
  font-size: 120px;
  z-index: 100;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Oswald", sans-serif;
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

export function Main() {
  const dragEndRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper
      ref={dragEndRef}
      variants={tagVarient}
      initial="start"
      animate="end"
    >
      {["D", "R", "A", "G"].map((word, index) => (
        <Word
          key={index}
          drag
          dragConstraints={dragEndRef}
          whileDrag={{
            rotateZ: 36000,
            transition: {
              duration: 20,
            },
          }}
        >
          {word}
        </Word>
      ))}
      <h1>DRAG</h1>
    </Wrapper>
  );
}

export default Main;
