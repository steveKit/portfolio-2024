import { motion } from "framer-motion";
import styled from "styled-components";
import AnimatedItemContainer from "./AnimatedItemContainer";

const LearnMoreButton = ({ href }) => {
    
    return (
        // <AnimatedItemContainer>
            <Button
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring" }}
                exit={{ y: -100, opacity: 0 }}
                to={href}
            >
                Learn More
            </Button>  
        // </AnimatedItemContainer>          
    )
};

const Button = styled(motion.button)`
    margin-top: 1.5rem;
    font-size: 1rem;
    width: 250px;
    padding: 5px 15px;
    color: white;
    border: 2px solid white;
    z-index: -10;
`

export default LearnMoreButton;