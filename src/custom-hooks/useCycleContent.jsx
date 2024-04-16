import { useState, useEffect } from 'react';
import useBackgroundColor from './useBackgroundColor';
import { textBlockDisplayInterval } from '../animations/AnimationTimingVariables';
const useCycledContent = (contentArray) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const newBackgroundColor = useBackgroundColor();

    const cycleContent = (index) => {
        const newIndex = index !== undefined ? index : (currentIndex + 1) % contentArray.length;
        setCurrentIndex(newIndex);
        newBackgroundColor();
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