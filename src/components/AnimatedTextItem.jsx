import { motion } from "framer-motion";
import styled from "styled-components";
import { textTopEntryVariants, textRightEntryVariants, textBottomEntryVariants, textLeftEntryVariants } from "../animations/AnimationVariants";

const AnimatedTextItem = ({ content, type, format }) => {
    const variants = [textTopEntryVariants, textRightEntryVariants, textBottomEntryVariants, textLeftEntryVariants];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    const randomDelay = Math.random() * (0.3 - 0.1) + 0.1;

    return (
        <AnimatedSpan
            variants={randomVariant(randomDelay)}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {content} 
        </AnimatedSpan>

    )
};

const AnimatedSpan = styled(motion.span)`
    display: inline-block;
`;

export default AnimatedTextItem;