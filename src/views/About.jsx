import styled from "styled-components";
import { motion } from "framer-motion";
import { useBackgroundColorContext } from "../context/BackgroundColorContext";
import { backgroundColorVariant } from "../animations/AnimationVariants";

const About = () => {
    const { backgroundColor } = useBackgroundColorContext();
    const aboutWrapperVariants = backgroundColorVariant(backgroundColor);

    return(
        <AboutWrapper
            initial="initial"
            animate="animate"
            exit="exit"
            variants={aboutWrapperVariants} 
        >
            <p>Hello</p>
        </AboutWrapper>
    )
}

const AboutWrapper = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    opacity: 0.95;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default About;