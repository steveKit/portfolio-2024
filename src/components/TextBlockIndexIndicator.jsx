import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { progressBarVariants } from "../animations/AnimationVariants";

const TextBlockIndexIndicator = ({ index, currentIndex, indicatorClickHandler }) => {
    const isActive = index === currentIndex;
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (isActive) {
            setStartAnimation(true);
        } else {
            setStartAnimation(false);
        }
    }, [isActive]);

    return (
        <Indicator
            className={isActive ? "active-index" : "" }
            onClick={() => isActive ? null : indicatorClickHandler(index)}
        >
            <ProgressBar
                className={isActive ? "active-index" : "" }
                animate={startAnimation ? "animate" : "initial"}
                variants={progressBarVariants}
            />
        </Indicator>         
    )
};

const Indicator = styled(motion.button)`
    width: 150px;
    height: 12px;
    border: none;
    padding: 0;
    margin: 1rem;
    background-color: white;
    opacity: 0.25;
    transition: all 1000ms ease-out;

    &.active-index {
        background-color: #00000040;
        opacity: 0.66;
    }

    &:hover:not(.active-index) {
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 300ms;
    }

    @media (max-width: 900px) {
        max-width: 20%;
        margin: 2.5%;
    }
`;

const ProgressBar = styled(motion.div)`
    visibility: hidden;
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;

    &.active-index {
        background: white;
        visibility: visible;
    }
    
`


export default TextBlockIndexIndicator;