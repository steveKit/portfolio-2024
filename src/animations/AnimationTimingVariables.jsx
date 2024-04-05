//timing for new text block in home component
const intervalDelay = 5;

//animation duration for textblock layout
const textBlockAnimationInterval = 0.5;

//do not change values of the timers below --

//timing offset for progress bars in TextBlockIndexIndicator.
const animationTimingOffset = textBlockAnimationInterval;
const progressBarDelay = animationTimingOffset;
//modified animation duration for progressBarVariant
const animationInterval = intervalDelay - animationTimingOffset;

//initial header animation delay
const initialDelay = textBlockAnimationInterval - 0.5;



export {
    textBlockAnimationInterval,
    animationInterval,
    progressBarDelay,
    initialDelay,
    intervalDelay,
    animationTimingOffset
};