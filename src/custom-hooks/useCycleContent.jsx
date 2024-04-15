import { useState, useEffect } from 'react';
import { textBlockDisplayInterval } from '../animations/AnimationTimingVariables';
import useBackgroundColor from './useBackgroundColor';
import colorArray from '../data/colorArray';
const useCycledContent = (contentArray) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundColor, updateBackGroundColor] = useBackgroundColor("bg-teal", colorArray);

    const cycleContent = (index) => {
        const newIndex = index !== undefined ? index : (currentIndex + 1) % contentArray.length;
        setCurrentIndex(newIndex);
        updateBackGroundColor();
    };

    useEffect(() => {

        const interval = setInterval(() => {
            cycleContent();
        }, textBlockDisplayInterval * 1000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return [contentArray[currentIndex], currentIndex, cycleContent];
};

export default useCycledContent;