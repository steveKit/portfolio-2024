import styled from "styled-components";
import { motion } from "framer-motion";
import { textBlockAnimationInterval } from "../animations/AnimationTimingVariables";
const About = () => {

    return(
        <AboutWrapper
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: (textBlockAnimationInterval / 2), duration: 0.3 }}
            // layout="textContentChange"
        >
            <p>Hello</p>
        </AboutWrapper>
    )
}

const AboutWrapper = styled(motion.div)`
    background-color: var(--bg-sage-gray);
    width: 100vw;
    height: 100vh;
    opacity: 0.80;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default About;