import { animationInterval, progressBarDelay, initialDelay, textBlockAnimationInterval } from "./AnimationTimingVariables";

const initialLoadVariants = {
    initial: {
        x: 3000 ,
    },
    animate: {
        x: 0,
        transition: { delay: initialDelay, stiffness: 100 },
    },
};

const progressBarVariants = {
    initial: { width: "0%" },
    animate: {
        width: "100%",
        transition: { delay: progressBarDelay, duration: animationInterval, ease: "linear" },
    },
};

const textWrapperVariants = {
    initial: {
        opacity: 1,
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

const learmMoreButtonVariants = {
    initial: { y: -200},
    animate: {
        y: 0,    
        transition: {
            delay: (textBlockAnimationInterval / 2) + 0.3,
            duration: (textBlockAnimationInterval / 2),
            type: "tween" },
    },
    exit: {
        y: -200,
        transition: {
            duration: (textBlockAnimationInterval / 2),
            type: "tween" },
    },
};

const textTopEntryVariants = (delayModifier) => ({
    initial: { y: "-200%"},
    animate: {
        y: "0%",    
        transition: {
            delay: ((textBlockAnimationInterval / 2) + delayModifier),
            duration: ((textBlockAnimationInterval - delayModifier) / 2),
            type: "tween" },
    },
    exit: {
        y: "200%",
        transition: {
            delay: delayModifier,
            duration: (textBlockAnimationInterval/ 2),
            type: "tween" },
    },
});

const textRightEntryVariants = (delayModifier) => ({
    initial: { x: "200%"},
    animate: {
        x: "0%",    
        transition: {
            delay: ((textBlockAnimationInterval / 2) + delayModifier),
            duration: ((textBlockAnimationInterval - delayModifier) / 2),
            type: "tween" },
    },
    exit: {
        x: "200%",
        transition: {
            delay: delayModifier,
            duration: (textBlockAnimationInterval / 2),
            type: "tween" },
    },
});

const textBottomEntryVariants = (delayModifier) => ({
    initial: { y: "200%"},
    animate: {
        y: "0%",    
        transition: {
            delay: ((textBlockAnimationInterval / 2) + delayModifier),
            duration: ((textBlockAnimationInterval - delayModifier) / 2),
            type: "tween" },
    },
    exit: {
        y: "200%",
        transition: {
            delay: delayModifier,
            duration: (textBlockAnimationInterval / 2),
            type: "tween" },
    },
});
const textLeftEntryVariants = (delayModifier) => ({
    initial: { x: "-200%"},
    animate: {
        x: "0%",    
        transition: {
            delay: ((textBlockAnimationInterval / 2) + delayModifier),
            duration: ((textBlockAnimationInterval - delayModifier) / 2),
            type: "tween" },
    },
    exit: {
        x: "-200%",
        transition: {
            delay: delayModifier,
            duration: (textBlockAnimationInterval / 2),
            type: "tween" },
    },
});

export {
    initialLoadVariants,
    progressBarVariants,
    textWrapperVariants,
    learmMoreButtonVariants,
    textTopEntryVariants,
    textRightEntryVariants,
    textLeftEntryVariants,
    textBottomEntryVariants
};