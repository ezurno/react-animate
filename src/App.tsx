import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "./Atoms";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Header from "./Header";
import Box from "./components/Box";
import Scroll from "./components/Scroll";
import Drag from "./components/Drag";
import Slider from "./components/Slider";
import Footer from "./Footer";
import Overlay from "./components/Overlay";

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
      <Header />
      {viewer === 0 ? (
        <Main />
      ) : viewer === 1 ? (
        <Logo />
      ) : viewer === 2 ? (
        <Box />
      ) : viewer === 3 ? (
        <Slider />
      ) : viewer === 4 ? (
        <Drag />
      ) : viewer === 5 ? (
        <Overlay />
      ) : null}
      <Footer />
    </Wrapper>
  );
}

export default App;
