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
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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
      "linear-gradient(135deg, #1800ee, #00a3ee)",
      "linear-gradient(135deg, #e09, #d0e)",
      "linear-gradient(135deg, #2cee00, #beee00)",
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
