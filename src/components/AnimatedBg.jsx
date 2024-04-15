import styled from "styled-components";
import { motion } from "framer-motion";
import useBackgroundColor from "../custom-hooks/useBackgroundColor";
import { textBlockAnimationInterval } from "../animations/AnimationTimingVariables";
const AnimatedBg = () => {
    const [backgroundColor] = useBackgroundColor();
    console.log(backgroundColor);
    return (
        <Background
            animate={{ backgroundColor: `var(--${backgroundColor})`}}
            transition={{ delay: (textBlockAnimationInterval / 2), duration: 0.3 }}
            exit={{ opacity: 0 }}
        />      
    )
};

const Background = styled(motion.div)`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    /* background-color: var(--bg-teal); */
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default AnimatedBg;