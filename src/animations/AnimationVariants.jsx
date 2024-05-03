import { animationInterval, progressBarDelay, initialDelay, textBlockAnimationInterval } from "./AnimationTimingVariables";

const initialLoadVariants = {
    initial: {
        x: 3000,
    },
    animate: {
        x: 0,
        transition: { delay: initialDelay, duration: 0.2 },
    },
    exit: {
        x: 3000,
        transition: { delay: 0.2 },
    },
};

const backgroundColorVariant = (backgroundColor) => ({
    initial: { backgroundColor },
    animate: {
        backgroundColor,
        transition: { delay: (textBlockAnimationInterval / 2), duration: 0.3 }
    },
    exit: {
            backgroundColor,
            transition: { delay: (textBlockAnimationInterval / 2), duration: 0.3 }
    },
});

const progressBarVariants = {
    initial: { width: "0%" },
    animate: {
        width: "100%",
        transition: { delay: progressBarDelay, duration: animationInterval - 0.15, ease: "linear" },
    },
};

const textWrapperVariants = {
    initial: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        transition: { delay: 0.1 },
    },
};

const learmMoreButtonVariants = {
    initial: { y: -200},
    animate: {
        y: 0,    
        transition: {
            delay: (textBlockAnimationInterval / 2) + 0.3,
            duration: 0.2,
        },
    },
    exit: {
        y: -200,
        transition: {
            delay: (textBlockAnimationInterval / 2) - 0.2,
        },
    },
};

const textTopEntryVariants = (delayModifier) => ({
    initial: { y: "-200%"},
    animate: {
        y: "0%",    
        transition: {
            delay: ((textBlockAnimationInterval / 2) + delayModifier),
            duration: ((textBlockAnimationInterval - delayModifier) / 2)
        },
    },
    exit: {
        y: "200%",
        transition: {
            delay: delayModifier,
            duration: (textBlockAnimationInterval/ 2)
        },
    },
});

const textRightEntryVariants = (delayModifier) => ({
    initial: { x: "200%"},
    animate: {
        x: "0%",    
        transition: {
            delay: ((textBlockAnimationInterval / 2) + delayModifier),
            duration: ((textBlockAnimationInterval - delayModifier) / 2)
        },
    },
    exit: {
        x: "200%",
        transition: {
            delay: delayModifier,
            duration: (textBlockAnimationInterval / 2)
        },
    },
});

const textBottomEntryVariants = (delayModifier) => ({
    initial: { y: "200%"},
    animate: {
        y: "0%",    
        transition: {
            delay: ((textBlockAnimationInterval / 2) + delayModifier),
            duration: ((textBlockAnimationInterval - delayModifier) / 2)
        },
    },
    exit: {
        y: "200%",
        transition: {
            delay: delayModifier,
            duration: (textBlockAnimationInterval / 2)
        },
    },
});
const textLeftEntryVariants = (delayModifier) => ({
    initial: { x: "-200%"},
    animate: {
        x: "0%",    
        transition: {
            delay: ((textBlockAnimationInterval / 2) + delayModifier),
            duration: ((textBlockAnimationInterval - delayModifier) / 2)
        },
    },
    exit: {
        x: "-200%",
        transition: {
            delay: delayModifier,
            duration: (textBlockAnimationInterval / 2)
        },
    },
});

export {
    initialLoadVariants,
    backgroundColorVariant,
    progressBarVariants,
    textWrapperVariants,
    learmMoreButtonVariants,
    textTopEntryVariants,
    textRightEntryVariants,
    textLeftEntryVariants,
    textBottomEntryVariants
};