import styled from "styled-components";
import { motion } from "framer-motion";

const TextBlockIndexIndicator = ({ isActive, index, indicatorClickHandler, intervalDelay }) => {

    const indicatorVariants = {
        inactive: { opacity: "0.75" },
        active: {  opacity: "1" }
    };

    return (
        <Indicator
            className={isActive ? "active-index" : "" }
            onClick={() => indicatorClickHandler(index)}
        >
            <Timer
                className={isActive ? "active-timer" : "" }

                // animate={isActive ? "active" : "inactive"}
                // variants={indicatorVariants}
                // transition={{ duration: intervalDelay }}
            />
        </Indicator>          
    )
};

const Indicator = styled.button`
    width: 150px;
    height: 10px;
    border: none;
    background-color: white;
    opacity: 0.25;

    &.active-index {
        opacity: 0.5;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    :first-child {
        opacity: 1;
    }
`;

const Timer = styled(motion.div)`

    display: none;

    &.active-timer {
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        background-color: white;
    }
    
`


export default TextBlockIndexIndicator;