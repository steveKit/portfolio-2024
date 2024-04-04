import { intervalDelay, animationTimingOffset } from "./AnimationTimingVariables";

//modified interval used for progressBarVariant
const animationInterval = intervalDelay - animationTimingOffset;

const indicatorVariants = {
    initial: { y: 500 },
    animate: {
        y: 0,
    },
};

const progressBarVariants = {
    initial: { width: "0%" },
    animate: {
        width: "100%",
        transition: { delay: (animationTimingOffset / 2), duration: animationInterval, ease: "linear" },
    },
};

export {
    indicatorVariants,
    progressBarVariants
};