import { useState } from 'react';

const useBackgroundColor = (defaultColor, colorArray) => {
    const [backgroundColor, setBackgroundColor] = useState(defaultColor);

    const getNewColor = () => {
        let newColor;
        if (!colorArray) {
            newColor = defaultColor;
            return newColor;
        } else {
            do {
                newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            } while (
                newColor === backgroundColor
            );
            return newColor;
        };
    };

    const updateBackgroundColor = () => {
        const newColor = getNewColor();
        setBackgroundColor(newColor);
    };

    return [backgroundColor, updateBackgroundColor];
};

export default useBackgroundColor;