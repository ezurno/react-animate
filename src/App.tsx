import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import Header from "./Header";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;

function App() {
  const [navIndex, setNavIndex] = useState<null | number>(null);
  const onNavClick = (index: number) => {
    setNavIndex(index);
    console.log(index);
  };

  return (
    <Wrapper>
      <Header></Header>
      <Logo></Logo>
    </Wrapper>
  );
}

export default App;
