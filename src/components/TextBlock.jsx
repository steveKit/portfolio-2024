import styled from "styled-components";
import { motion } from "framer-motion";
import TextBlockTitle from "./TextBlockTitle";
import TextBlockBody from "./TextBlockBody";
import LearnMoreButton from "./LearnMoreButton";
import { textWrapperVariants } from "../animations/AnimationVariants";

import AnimatedItemContainer from "./AnimatedItemContainer";

const TextBlock = ({title, body, href}) => {
    
    return (
        <TextWrapper  
            variants={textWrapperVariants}
        >
            
            <TextBlockTitle title={title} />
            <TextBlockBody body={body} />
            <AnimatedItemContainer component={LearnMoreButton} href={href} />
        </TextWrapper>  
    )
};

const TextWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 1.2rem;
    width: 750px;
    min-width: 40%;
    max-width: 85%;
    text-align: center;

    @media (max-width: 400px) {
        padding-top: 1.5rem;
    }
`

export default TextBlock;