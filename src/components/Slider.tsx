import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  user-select: none;
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
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const BoxVarient: Variants = {
  initial: (back: Boolean) => ({
    opacity: 0,
    scale: 0,
    x: back ? -300 : 300,
  }),
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: Boolean) => ({
    x: back ? 300 : -300,
    scale: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  }),
};

const Arrow = styled(motion.span)`
  cursor: pointer;
  padding: 0 30px;
  user-select: none;
`;

function Slider() {
  const [pageNumber, setPageNumber] = useState(1);
  const [back, setBack] = useState(false);
  const onNext = async () => {
    await setBack(false);
    setPageNumber((page) => (page === 10 ? 10 : page + 1));
  };
  const onPrev = async () => {
    await setBack(true);
    setPageNumber((page) => (page === 1 ? 1 : page - 1));
  };
  return (
    <Wrapper variants={tagVarient} initial="start" animate="end">
      <Arrow
        whileHover={{ x: -30 }}
        onClick={onPrev}
        className="material-symbols-outlined"
      >
        arrow_back_ios_new
      </Arrow>
      <AnimatePresence mode="wait" custom={back}>
        <Box
          custom={back}
          variants={BoxVarient}
          initial="initial"
          exit="exit"
          animate="animate"
          key={pageNumber}
        >
          {pageNumber}
        </Box>
      </AnimatePresence>
      <Arrow
        whileHover={{ x: 30 }}
        onClick={onNext}
        className="material-symbols-outlined"
      >
        arrow_forward_ios
      </Arrow>
    </Wrapper>
  );
}

export default Slider;
