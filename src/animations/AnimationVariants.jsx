import { animationInterval, progressBarDelay, initialDelay, textBlockAnimationInterval } from "./AnimationTimingVariables";

const initialLoadVariants = {
    initial: {
        x: 3000 ,
    },
    animate: {
        x: 0,
        transition: { delay: initialDelay },
    },
};

const progressBarVariants = {
    initial: { width: "0%" },
    animate: {
        width: "100%",
        transition: { delay: progressBarDelay, duration: animationInterval, ease: "linear" },
    },
};

const learnMoreButtonVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: textBlockAnimationInterval,
            type: "tween" },
    },
    exit: { y: -100, opacity: 0 },
}

const textWrapperVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { delay: textBlockAnimationInterval, duration: textBlockAnimationInterval },
    },
    exit: {
        opacity: 0,
        transition: {duration: textBlockAnimationInterval },
    },
};

export {
    learnMoreButtonVariants,
    initialLoadVariants,
    progressBarVariants,
    textWrapperVariants
};