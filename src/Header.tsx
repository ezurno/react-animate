import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Nav = styled(motion.ul)`
  width: 70%;
  height: 20%;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const NavList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 25px;

  h1 {
    margin: 25px;
  }
`;

const NavVarient: Variants = {
  initial: {
    y: 15,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },

  tap: {
    y: 20,
  },

  hover: {
    fontSize: "30px",
    fontWeight: 300,
    rotate: 10,
  },
};

function Header() {
  const [navIndex, setNavIndex] = useState<null | number>(null);
  const onNavClick = (index: number) => {
    setNavIndex(index);
    console.log(index);
  };
  return (
    <AnimatePresence>
      <Nav>
        {["MAIN", "LOGO", "BOX", "SCROLL", "SLIDER", "DRAG", "OVERLAY"].map(
          (nav, index) => (
            <NavList
              variants={NavVarient}
              key={`${index}-list`}
              onClick={() => onNavClick(index)}
              initial="initial"
              animate="animate"
              exit="exit"
              whileTap="tap"
              whileHover="hover"
            >
              <h1>{nav}</h1>
            </NavList>
          )
        )}
      </Nav>
    </AnimatePresence>
  );
}

export default Header;
