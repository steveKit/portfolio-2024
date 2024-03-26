import { motion } from "framer-motion";
import styled from "styled-components";

const LearnMoreButton = () => {
    
    return (
        <Button
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
        >
            Learn More
        </Button>            
    )
};

const Button = styled(motion.button)`
    margin-top: 1.5rem;
    font-size: 1rem;
    padding: 5px 15px;
    color: white;
    border: 2px solid white;
    z-index: -10;
`

export default LearnMoreButton;