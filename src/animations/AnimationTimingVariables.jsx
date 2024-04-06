//timing for new text block in home component
const textBlockDisplayInterval = 10;

//duration textblock layout animation - total length, in + out
const textBlockAnimationInterval = 1;

//do not change values of the timers below --

//timing offset for progress bars in TextBlockIndexIndicator.
const animationTimingOffset = textBlockAnimationInterval;
const progressBarDelay = animationTimingOffset;
//modified animation duration for progressBarVariant
const animationInterval = textBlockDisplayInterval - animationTimingOffset;

//initial header & index indicator animation delay
const initialDelay = textBlockAnimationInterval;



export {
    textBlockAnimationInterval,
    animationInterval,
    progressBarDelay,
    initialDelay,
    textBlockDisplayInterval,
    animationTimingOffset
};