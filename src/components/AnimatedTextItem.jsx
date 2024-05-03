import styled from "styled-components";
import { motion } from "framer-motion";
import { textTopEntryVariants, textRightEntryVariants, textBottomEntryVariants, textLeftEntryVariants } from "../animations/AnimationVariants";

const AnimatedTextItem = ({ content }) => {
    const variants = [textTopEntryVariants, textRightEntryVariants, textBottomEntryVariants, textLeftEntryVariants];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    const randomDelay = Math.random() * 0.3;

    return (
        <AnimatedSpan
            initial="initial"
            animate="animate"
            exit="exit"
            variants={randomVariant(randomDelay)}
        >
            {content} 
        </AnimatedSpan>

    )
};

const AnimatedSpan = styled(motion.span)`
    display: inline-block;
`;

export default AnimatedTextItem;