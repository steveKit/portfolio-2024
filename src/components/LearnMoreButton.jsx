import { motion } from "framer-motion";
import styled from "styled-components";
import { learmMoreButtonVariants } from "../animations/AnimationVariants"; 

const LearnMoreButton = ({ href }) => {
    
    return (
            <Button
                initial="initial"
                animate="animate"
                exit="exit"
                variants={learmMoreButtonVariants}
                to={href}
            >
                Learn More
            </Button>         
    )
};

const Button = styled(motion.button)`
    margin: 2.5rem 0;
    font-size: 1rem;
    width: 250px;
    max-width: 95%;
    padding: 5px 15px;
    color: white;
    border: 2px solid white;
    z-index: -10;

    @media (max-height: 700px) {
        margin-top: 2rem;
    }

    @media (max-width: 300px) {
        margin-top: 1rem;
        font-size: 0.85rem;
    }

`

export default LearnMoreButton;