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

const ScrollBox = styled(motion.div)`
  width: 480px;
  height: 480px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  overflow-y: scroll;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MiniBox = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

function Scroll() {
  return (
    <Wrapper variants={tagVarient} initial="start" animate="end">
      <ScrollBox>
        <MiniBox />
      </ScrollBox>
    </Wrapper>
  );
}

export default Scroll;
