import colorArray from '../data/colorArray';
import { useBackgroundColorContext } from '../context/BackgroundColorContext';

const useBackgroundColor = () => {
    const { backgroundColor, updateBackgroundColor } = useBackgroundColorContext();

    const changeColorRandomly = () => {
        let newColor;
        do {
            newColor = `var(${colorArray[Math.floor(Math.random() * colorArray.length)]})`;
        } while (newColor === backgroundColor);
        updateBackgroundColor(newColor);
    };

    const changeToRequestedColor = (requestedColor) => {
        const newColor = requestedColor || '--bg-teal';
        updateBackgroundColor(`var(${newColor})`);
    };

    const newBackgroundColor = (requestedColor) => {
        if (!requestedColor) {
            changeColorRandomly();
        } else {
            return changeToRequestedColor(requestedColor);
        }
    };

    return newBackgroundColor;
};

export default useBackgroundColor;
