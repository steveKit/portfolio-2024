import { motion } from "framer-motion";
import { textTopEntryVariants, textRightEntryVariants, textBottomEntryVariants, textLeftEntryVariants } from "../animations/AnimationVariants";

const AnimatedTextItem = ({ content, tag }) => {
    const variants = [textTopEntryVariants, textRightEntryVariants, textBottomEntryVariants, textLeftEntryVariants];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    const randomDelay = Math.random() * (0.3 - 0.1) + 0.1;

    const MotionComponent = tag === "h1" ? motion.h1 : motion.p;

    return (
        <MotionComponent
            variants={randomVariant(randomDelay)}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {content} 
        </MotionComponent>

    )
};

export default AnimatedTextItem;