import styled from "styled-components";
import { motion } from "framer-motion";
import { animationTimingOffset } from "../data/AnimationTimingVariables";

const TextBlockIndexIndicator = ({ index, currentIndex, indicatorClickHandler, intervalDelay }) => {

    const isActive = index === currentIndex;
    const animationInterval = intervalDelay - animationTimingOffset;

    const progressBarAnimation = {
        hidden: { width: "0%" },
        visible: {
            width: "100%",
            transition: { delay: (animationTimingOffset / 2), duration: animationInterval, ease: "linear" },
        },
    };

    return (
        <Indicator
            className={isActive ? "active-index" : "" }
            onClick={() => indicatorClickHandler(index)}
        >
            <ProgressBar
                className={isActive ? "active-index" : "" }
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
                variants={progressBarAnimation}
            />
        </Indicator>          
    )
};

const Indicator = styled.button`
    width: 150px;
    height: 10px;
    border: none;
    padding: 0;
    background-color: white;
    opacity: 0.25;

    &.active-index {
        background-color: #00000040;
        opacity: 0.66;
    }

    &:hover:not(.active-index) {
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 200ms;
    }
`;

const ProgressBar = styled(motion.div)`
    visibility: hidden;

    &.active-index {
        position: relative;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: white;
        visibility: visible;
    }
    
`


export default TextBlockIndexIndicator;