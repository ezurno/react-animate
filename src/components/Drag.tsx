import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  overflow: hidden;
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

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
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

function Drag() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 0, 800], [-360, 0, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgba(0, 0, 0, 0.079),rgba(0, 0, 0, 0.71))",
      "linear-gradient(135deg, rgba(0, 0, 0, 0.807), rgba(0, 0, 0, 0.719))",
      "linear-gradient(135deg, rgba(0, 0, 0, 0.773), rgba(0, 0, 0, 0.066))",
    ]
  );
  return (
    <Wrapper
      variants={tagVarient}
      initial="start"
      animate="end"
      ref={wrapperRef}
      style={{ background: gradient }}
    >
      <Box
        drag="x"
        dragSnapToOrigin
        style={{ x, rotateZ }}
        dragConstraints={wrapperRef}
      />
    </Wrapper>
  );
}

export default Drag;
