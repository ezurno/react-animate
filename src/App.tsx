import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  Variants,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
  useScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
  overflow: hidden;
`;

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

const BoxVarient: Variants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); // animation의 state와 velocity를 추적함 => react에서 자동으로 rerendering 하지 않게 block함
  const rotateZ = useTransform(x, [-800, 0, 800], [-360, 0, 360]); // useTransfom 은 한 값을 구간을 나눠 값을 자동 치환 해줌
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, #1800ee, #00a3ee)",
      "linear-gradient(135deg, #e09, #d0e)",
      "linear-gradient(135deg, #2cee00, #beee00)",
    ]
  );

  const { scrollY, scrollYProgress } = useScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get(), scrollYProgress.get()); // scrollY 와 scrollYProcss의 값은 각각 pixel, main % 값임
    });
  }, [scrollY, scrollYProgress]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper ref={wrapperRef} style={{ background: gradient }}>
      <Box
        drag="x"
        dragSnapToOrigin
        style={{ x, rotateZ, scale }}
        dragConstraints={wrapperRef}
      />
    </Wrapper>
  );
}

export default App;
