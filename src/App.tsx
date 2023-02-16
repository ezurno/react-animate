import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Box from "./components/Box";
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
  const [navIndex, setNavIndex] = useState<null | number>(null);
  const [viewer, setViewer] = useState(0);

  const onNavClick = (index: number) => {
    setNavIndex(index);
    console.log(index);
  };

  return (
    <Wrapper>
      <Header></Header>
      {viewer === 0 ? <Logo /> : viewer === 1 ? <Box /> : null}
    </Wrapper>
  );
}

export default App;
