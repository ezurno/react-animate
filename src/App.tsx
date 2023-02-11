import React, { useRef } from "react";
import styled from "styled-components";
import { Variants, motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          // dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} 일반적인 방식
          dragElastic={0} // default Value = 0.5 drag 시 탄성 조절
          dragConstraints={biggerBoxRef} // dragBox 의 틀을 설정 useRef로 지정
          dragSnapToOrigin={false} // drag가 끝날 시 원점으로 돌아가는지
          variants={BoxVarient}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
