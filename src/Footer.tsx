import { motion } from "framer-motion";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 10%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);

  svg {
    transition: 0.5s color ease-in-out;
    :hover {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <a href="https://github.com/ezurno/react-animate">
        <FaGithubSquare size={48} />
      </a>
    </Wrapper>
  );
}

export default Footer;
