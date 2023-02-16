import { motion, Variants } from "framer-motion";
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

function Overlay() {
  return (
    <Wrapper variants={tagVarient} initial="start" animate="end"></Wrapper>
  );
}

export default Overlay;
