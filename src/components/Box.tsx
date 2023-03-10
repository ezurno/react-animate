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
  width: 320px;
  height: 320px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

const MiniBox = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

// const ballVarient: Variants = {
//   click: {
//     backgroundColor: "#000000",
//     transition: {
//       duration: 1,
//     },
//   },
// };

function Box() {
  const boxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper variants={tagVarient} initial="start" animate="end">
      <Rect ref={boxRef}>
        <MiniBox
          drag
          dragConstraints={boxRef}
          dragElastic={0.2}
          dragSnapToOrigin
          whileTap={{
            borderRadius: "75px",
            backgroundColor: "rgba(255,255,255,0.6)",
          }}
        />
      </Rect>
    </Wrapper>
  );
}

export default Box;
