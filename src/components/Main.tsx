import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  padding: 50px;
  overflow: hidden;
  h1 {
    font-size: 120px;
    position: absolute;
    user-select: none;
    opacity: 0.3;
  }
`;

const Word = styled(motion.div)`
  height: fit-content;
  width: fit-content;
  font-size: 120px;
  z-index: 100;
  cursor: pointer;
`;

export function Main() {
  const dragEndRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper ref={dragEndRef}>
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
