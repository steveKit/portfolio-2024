//timing for new text block in home component
const textBlockDisplayInterval = 10;

//duration textblock layout animation - total length, in + out
const textBlockAnimationInterval = 0.5;

//timing offset for progress bars in TextBlockIndexIndicator.
const animationTimingOffset = textBlockAnimationInterval;
const progressBarDelay = animationTimingOffset + 0.1;
//modified animation duration for progressBarVariant
const animationInterval = textBlockDisplayInterval - animationTimingOffset;

//initial header & index indicator animation delay
const initialDelay = (textBlockAnimationInterval / 2) + 0.5;

export {
    textBlockAnimationInterval,
    animationInterval,
    progressBarDelay,
    initialDelay,
    textBlockDisplayInterval,
    animationTimingOffset
};