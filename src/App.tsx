import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "./Atoms";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Header from "./Header";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  min-width: 960px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;

function App() {
  const [viewer, setViewer] = useRecoilState(navState);

  return (
    <Wrapper>
      <Header></Header>
      {viewer === 0 ? <Main /> : viewer === 1 ? <Logo /> : null}
    </Wrapper>
  );
}

export default App;
