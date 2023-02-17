import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  height: 200px;
  cursor: pointer;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 6px 46px;
`;

const OverlayBox = styled(motion.div)`
  width: 100%;
  height: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

function Overlay() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper variants={tagVarient} initial="start" animate="end">
      <Grid>
        {["1", "2", "3", "4"].map((number) => (
          <Box onClick={() => setId(number)} key={number} layoutId={number} />
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <OverlayBox
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0,0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ width: 400 }} />
          </OverlayBox>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Overlay;
